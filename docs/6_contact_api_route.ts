// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Define the validation schema matching the original CF7 fields
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    // Send email via Resend (or any transactional email service)
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'ICT Foundation Contact <onboarding@resend.dev>', // Your verified domain
      to: ['admin@ictfoundation.org.np', 'research@ictfoundation.org.np'],
      reply_to: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Thank you! Your message has been sent.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}