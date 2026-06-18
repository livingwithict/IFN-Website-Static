// components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Submission failed');

      toast.success('Message sent successfully!');
      reset();
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#0C4CA4] focus:outline-none focus:ring-1 focus:ring-[#0C4CA4]"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#0C4CA4] focus:outline-none focus:ring-1 focus:ring-[#0C4CA4]"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
            Subject *
          </label>
          <input
            id="subject"
            type="text"
            {...register('subject')}
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#0C4CA4] focus:outline-none focus:ring-1 focus:ring-[#0C4CA4]"
          />
          {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#0C4CA4] focus:outline-none focus:ring-1 focus:ring-[#0C4CA4]"
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-[#E33730] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#c22e28] disabled:cursor-not-allowed disabled:opacity-50 font-[Chivo]"
        >
          {isSubmitting ? 'Sending...' : 'Contact Us'}
        </button>
      </form>
    </>
  );
}