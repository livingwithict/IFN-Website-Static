# ICT Foundation Nepal – Architecture Design

## 1. Overview
The rebuilt website will be a **static single-page application** using **Next.js**, consuming content from a **headless CMS**. This decouples the presentation layer from content management, eliminates PHP-based vulnerabilities, and provides excellent performance and scalability.

## 2. Technology Stack

| Layer             | Technology                          |
|-------------------|-------------------------------------|
| Frontend          | Next.js 14 (App Router), TypeScript |
| Styling           | Tailwind CSS + minimal custom CSS   |
| Animations        | Framer Motion                       |
| Form Handling     | React Hook Form + Zod               |
| Email Delivery    | Resend (or SendGrid) via API route  |
| CMS (Backend)     | Strapi (self-hosted) or Sanity (managed) |
| Hosting / CDN     | Vercel (automatic HTTPS, global CDN)|
| Repository        | GitHub                              |

## 3. Content Architecture

All dynamic content (text, images, lists) is stored in the headless CMS. Models:

- **Site Settings**: logo, favicon, contact info, social links, copyright.
- **Hero Section**: tagline, background image, CTA text.
- **About Section**: heading, body text.
- **Publications**: repeating list of title, cover image, PDF file.
- **Events**: list of title, date, description, banner image, link.
- **Research Surveys**: title, description, cover image, download file.
- **Assistance Items**: icon, title, description.
- **Contact Section**: heading, form configuration (field labels).

## 4. Data Flow

1. **Build Time**  
   - `page.tsx` calls the CMS API (REST or GraphQL) during `generateStaticParams` or a custom fetch.  
   - All content is fetched and rendered into static HTML.  
   - Next.js Image Optimization automatically handles responsive images.

2. **Incremental Updates**  
   - CMS triggers a webhook to a Next.js API route (`/api/revalidate`) when content changes.  
   - The route checks a secret token, then calls `revalidatePath('/')` or `revalidateTag`.  
   - New visitors receive the updated page immediately.

3. **Contact Form**  
   - Client-side: React Hook Form validates inputs using Zod schemas.  
   - On submit: `POST /api/contact` with JSON body.  
   - Server route validates again, sends email via Resend to `admin@ictfoundation.org.np` and `research@ictfoundation.org.np`.

## 5. Security Measures
- **Static site** – no live WordPress, no PHP execution.
- **API keys** (CMS token, Resend API key) stored in Vercel environment variables.
- **Serverless function** runs only allowed logic.
- **Rate limiting** on the contact endpoint via Vercel IP blocking or a simple in-memory store (optional).
- **Content Security Policy (CSP)** headers configured in `next.config.js`.

## 6. Deployment Pipeline
- Main branch → auto-deployed to Vercel.
- Previews for pull requests.
- CMS webhook triggers redeployment or on-demand revalidation.

## 7. Directory Structure (simplified)