"use client";

import { useEffect, useState } from 'react';

export default function ResetPasswordErrorPage() {
  const [details, setDetails] = useState<string>('');

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('rt_recovery_error');
      if (raw) {
        const parsed = JSON.parse(raw) as { error?: string; error_description?: string };
        setDetails(parsed.error_description || 'Unknown');
      } else {
        setDetails('Unknown');
      }
    } catch {
      setDetails('Unknown');
    }
  }, []);

  return (
    <main className="min-h-screen font-sans flex items-center">
      <section className="w-full">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: 'var(--color-rochester-blue)' }}
          >
            Oops, we couldn&apos;t reset your password
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-7 text-foreground/80">{details}</p>
          <p className="mt-2 text-base sm:text-lg leading-7 text-foreground/80">
            Please contact us at <a href="mailto:contact@roctrades.com" className="underline">contact@roctrades.com</a> for more assistance.
          </p>
        </div>
      </section>
    </main>
  );
}


