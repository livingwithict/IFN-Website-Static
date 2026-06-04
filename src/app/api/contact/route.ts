// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';
// import { z } from 'zod';

// // ---------------------------------------------------------------------------
// // 1. Rate limiting — in-memory per-IP, 5 requests per 60-second window
// // ---------------------------------------------------------------------------
// const RATE_LIMIT_WINDOW = 60_000;
// const RATE_LIMIT_MAX = 5;
// const ipAttempts = new Map<string, { count: number; start: number }>();

// function isRateLimited(ip: string): boolean {
//   const now = Date.now();
//   const entry = ipAttempts.get(ip);

//   if (!entry || now - entry.start > RATE_LIMIT_WINDOW) {
//     ipAttempts.set(ip, { count: 1, start: now });
//     return false;
//   }

//   entry.count++;
//   return entry.count > RATE_LIMIT_MAX;
// }

// // Periodically purge stale entries every 5 minutes
// setInterval(() => {
//   const now = Date.now();
//   for (const [ip, entry] of ipAttempts) {
//     if (now - entry.start > RATE_LIMIT_WINDOW) ipAttempts.delete(ip);
//   }
// }, 5 * 60_000);

// // ---------------------------------------------------------------------------
// // 2. Validation schema with strict sanitization
// // ---------------------------------------------------------------------------
// function sanitize(str: string): string {
//   return str
//     .replace(/[<>]/g, '')           // strip angle brackets
//     .replace(/&(?:#\d+|[a-z]+);/gi, '') // strip HTML entities
//     .trim();
// }

// const contactSchema = z.object({
//   name: z.string().min(2).max(100).transform(sanitize),
//   email: z.string().email().max(200).transform(sanitize),
//   subject: z.string().min(2).max(200).transform(sanitize),
//   message: z.string().min(10).max(5000).transform(sanitize),
//   // Honeypot — must be empty
//   website: z.string().max(0).optional(),
// });

// // ---------------------------------------------------------------------------
// // 3. POST handler
// // ---------------------------------------------------------------------------
// export async function POST(request: Request) {
//   // --- Rate limit by IP --------------------------------------------------
//   const forwarded = request.headers.get('x-forwarded-for');
//   const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

//   if (isRateLimited(ip)) {
//     return NextResponse.json(
//       { error: 'Too many requests. Please try again later.' },
//       { status: 429 },
//     );
//   }

//   // --- Timing gate — reject sub-second submissions (bots) ----------------
//   const clientSentAt = request.headers.get('x-form-timestamp');
//   if (clientSentAt) {
//     const elapsed = Date.now() - parseInt(clientSentAt, 10);
//     if (elapsed < 1500) {
//       return NextResponse.json(
//         { error: 'Submission too fast. Please try again.' },
//         { status: 429 },
//       );
//     }
//   }

//   // --- Parse & validate --------------------------------------------------
//   let body: unknown;
//   try {
//     body = await request.json();
//   } catch {
//     return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
//   }

//   const parsed = contactSchema.safeParse(body);
//   if (!parsed.success) {
//     return NextResponse.json(
//       { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
//       { status: 400 },
//     );
//   }

//   const { name, email, subject, message } = parsed.data;

//   // --- Send email --------------------------------------------------------
//   try {
//     const resend = new Resend(process.env.RESEND_API_KEY);

//     await resend.emails.send({
//       from: 'ICT Foundation Contact <onboarding@resend.dev>',
//       to: ['admin@ictfoundation.org.np', 'research@ictfoundation.org.np'],
//       replyTo: email,
//       subject: `New Contact Form: ${subject}`,
//       html: escapeHtmlEmail({ name, email, subject, message }),
//     });
//   } catch (error) {
//     console.error('Contact form email error:', error);
//     return NextResponse.json(
//       { error: 'Failed to send message. Please try again later.' },
//       { status: 500 },
//     );
//   }

//   return NextResponse.json(
//     { success: true, message: 'Thank you! Your message has been sent.' },
//     { status: 200 },
//   );
// }

// // ---------------------------------------------------------------------------
// // 4. HTML email builder — all user input escaped, no injection possible
// // ---------------------------------------------------------------------------
// function escapeHtml(str: string): string {
//   return str
//     .replace(/&/g, '&amp;')
//     .replace(/</g, '&lt;')
//     .replace(/>/g, '&gt;')
//     .replace(/"/g, '&quot;')
//     .replace(/'/g, '&#39;');
// }

// function escapeHtmlEmail({
//   name,
//   email,
//   subject,
//   message,
// }: {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }): string {
//   return `
//     <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a;">
//       <h2 style="margin:0 0 16px;color:#0C4CA4;">New Contact Form Submission</h2>
//       <table style="width:100%;border-collapse:collapse;">
//         <tr>
//           <td style="padding:6px 0;font-weight:600;width:80px;">Name:</td>
//           <td style="padding:6px 0;">${escapeHtml(name)}</td>
//         </tr>
//         <tr>
//           <td style="padding:6px 0;font-weight:600;">Email:</td>
//           <td style="padding:6px 0;">${escapeHtml(email)}</td>
//         </tr>
//         <tr>
//           <td style="padding:6px 0;font-weight:600;">Subject:</td>
//           <td style="padding:6px 0;">${escapeHtml(subject)}</td>
//         </tr>
//       </table>
//       <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
//       <p style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(message)}</p>
//     </div>
//   `;
// }

// // Reject all non-POST methods
// export async function GET() {
//   return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
// }
// export async function PUT() {
//   return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
// }
// export async function DELETE() {
//   return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
// }
