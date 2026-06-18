'use client';
// components/CollaboratorsGrid.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Collaborator } from '@/data/collaborators';

interface CollaboratorsGridProps {
  collaborators: Collaborator[];
  title?: string;
}

export default function CollaboratorsGrid({ collaborators, title }: CollaboratorsGridProps) {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) => {
    setImageErrors(prev => new Set([...prev, id]));
  };

  return (
    <div className="mb-12">
      {title && (
        <h3 className="mb-8 text-2xl font-semibold text-body-text">
          {title}
        </h3>
      )}

      <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
        {collaborators.map((collaborator) => (
          <a
            key={collaborator.id}
            href={collaborator.website || '#'}
            target={collaborator.website ? '_blank' : undefined}
            rel={collaborator.website ? 'noopener noreferrer' : undefined}
            className="card-hover group flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm p-6"
          >
            {/* Logo Container - Fixed aspect ratio for consistency */}
            <div className="aspect-square w-full flex items-center justify-center mb-4 bg-white rounded-lg border border-gray-100">
              {!imageErrors.has(collaborator.id) ? (
                <div className="relative w-48 h-48 flex items-center justify-center p-4">
                  <Image
                    src={collaborator.logo}
                    alt={collaborator.name}
                    fill
                    className="object-contain"
                    onError={() => handleImageError(collaborator.id)}
                  />
                </div>
              ) : (
                <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-xs font-bold text-primary text-center">
                  {collaborator.name
                    .split(' ')
                    .map(word => word[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)}
                </div>
              )}
            </div>

            {/* Organization Name */}
            <p className="text-center text-sm font-semibold text-body-text line-clamp-2 group-hover:text-primary transition-colors">
              {collaborator.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
