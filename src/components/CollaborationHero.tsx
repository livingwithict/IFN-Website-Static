'use client';
import React from 'react';

export default function CollaborationHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-80 w-full overflow-hidden sm:h-96 lg:h-[450px]">
        <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-900" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-end p-6 sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          <h2 className="text-white/80 mb-3 text-sm font-semibold uppercase tracking-wider">Partnerships & Collaboration</h2>
          <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Our Partners & Collaborators</h1>
          <p className="text-lg text-white/90">Join us in driving digital transformation across Nepal through strategic partnerships and collaboration.</p>
        </div>
      </div>
    </section>
  );
}
