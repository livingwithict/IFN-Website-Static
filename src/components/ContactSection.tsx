'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formMountedAt = useState(Date.now)[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-form-timestamp': String(formMountedAt),
        },
        body: JSON.stringify({
          ...data,
          website: '', // honeypot — must be empty
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Submission failed');

      toast.success('Message sent successfully!');
      reset();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      {/* Support Our Cause */}
      <div className="gradient-primary relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-dots opacity-20" aria-hidden="true" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5" aria-hidden="true" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Collaborate with Us
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80">
            Join us in shaping Nepal’s digital future through collaborative efforts in finance, technology, and resources.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
              style={{ backgroundColor: '#ed1c24', boxShadow: '0 10px 15px -3px rgba(237, 28, 36, 0.25)' }}
            >
              Contact Us
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            {/* <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              Get In Touch
            </a> */}
          </div>
        </div>
      </div>

      {/* Contact Details & Form */}
      <AnimatedSection id="contact" className="bg-surface">
        <div className="mx-auto mb-4 section-divider" />
        <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-[32px]">
          Contact & Support
        </h2>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl bg-white p-8 shadow-sm">
            {/* Honeypot — hidden from humans, bots will fill it */}
            <input
              type="text"
              {...register('website' as keyof FormData)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute h-0 w-0 overflow-hidden opacity-0"
              style={{ position: 'absolute' }}
            />
            <h3 className="mb-5 text-xl font-bold gradient-text-primary">Leave us a message</h3>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-body-text/80">
                Name *
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-[15px] transition-all focus:border-primary focus:bg-white"
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-body-text/80">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-[15px] transition-all focus:border-primary focus:bg-white"
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-body-text/80">
                Subject *
              </label>
              <input
                id="subject"
                type="text"
                {...register('subject')}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-[15px] transition-all focus:border-primary focus:bg-white"
              />
              {errors.subject && (
                <p className="mt-1.5 text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-body-text/80">
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-10 text-[15px] transition-all focus:border-primary focus:bg-white"
              />
              {errors.message && (
                <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              style={{ backgroundColor: '#ed1c24', boxShadow: '0 10px 15px -3px rgba(237, 28, 36, 0.2)' }}
            >
              {isSubmitting ? (
                <>
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Contact Us
                </>
              )}
            </button>
          </form>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="mb-5 text-xl font-bold gradient-text-primary">ICT Foundation Nepal</h3>
              <div className="space-y-5 text-[15px] text-body-text">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <FaPhone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-body-text">Phone</p>
                    <p className="text-body-text/65">+977-9851141348 | +977-9801263604 | +977-9801263601</p>
                    {/* <p className="text-body-text/65">+977-9801263604</p>
                    <p className="text-body-text/65">+977-9801263601</p> */}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <FaEnvelope className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-body-text">Email</p>
                    <p className="text-body-text/65">
                      <a href="mailto:admin@ictfoundation.org.np" className="text-primary hover:underline">admin@ictfoundation.org.np</a>
                      <br />
                      <a href="mailto:razan@ictfoundation.org.np" className="text-primary hover:underline">razan@ictfoundation.org.np</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <FaMapMarkerAlt className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-body-text">Address</p>
                    <p className="text-body-text/65">Sankhamul, Kathmandu-31, Nepal</p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-8">
                <div>
                  <h3 className="mb-5 text-xl font-bold gradient-text-primary">Our Location</h3>
                </div>
                
                {/* FIX: Replaced md:h-full with md:h-96 so it has a defined height on desktop */}
                <div className="relative h-64 md:h-96 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14133.0232490333!2d85.3320015!3d27.6838239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900617307fd%3A0x77c2e1e07ddd81f2!2sICT%20Foundation%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                    width="100%"
                    height="100%" /* FIX: Changed from 300% to 100% */
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ICT Foundation Nepal Location"
                    className="absolute inset-0"
                    aria-hidden="false"
                  ></iframe>
                  
                  <a 
                    href="https://maps.app.goo.gl/zA9eyDDWd8wHN6uXA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute bottom-4 right-4 bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md shadow-lg text-sm font-medium flex items-center gap-2 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View on Google Maps
                  </a>
                </div>
              </div>
              
              {/* <div className="space-y-5 text-[15px] text-body-text">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <FaGlobe className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-body-text">Website</p>
                    <a
                      href="https://ictfoundation.org.np"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      ictfoundation.org.np
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
