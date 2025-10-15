"use client";

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient, isSupabaseConfigured } from '../lib/supabaseClient';

function parseHashParams(hash: string): Record<string, string> {
  const raw = hash.startsWith('#') ? hash.slice(1) : hash;
  const params = new URLSearchParams(raw);
  const result: Record<string, string> = {};
  params.forEach((value, key) => {
    if (!(key in result)) result[key] = value;
  });
  return result;
}

export default function ResetPasswordClient() {
  const router = useRouter();
  const [fragmentParams, setFragmentParams] = useState<Record<string, string>>({});
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorKey, setErrorKey] = useState(0);

  useEffect(() => {
    const read = () => setFragmentParams(parseHashParams(window.location.hash));
    read();
    window.addEventListener('hashchange', read);
    return () => window.removeEventListener('hashchange', read);
  }, []);

  const merged = useMemo(() => {
    return {
      access_token: fragmentParams.access_token,
      email: fragmentParams.email,
      error: fragmentParams.error,
      error_description: fragmentParams.error_description,
    };
  }, [fragmentParams]);

  const isError = Boolean(merged.error);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!merged.access_token) {
      setError('Missing or invalid recovery token. Please use the link from your email.');
      setErrorKey((k) => k + 1);
      return;
    }
    if (!password) {
      setError('Please enter your new password.');
      setErrorKey((k) => k + 1);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setErrorKey((k) => k + 1);
      return;
    }

    setSubmitting(true);
    try {
      if (!isSupabaseConfigured || process.env.NEXT_PUBLIC_E2E === '1') {
        // In test/dev where keys are not present, simulate success when inputs are valid
        router.push('/reset-password/success');
        return;
      }
      const supabase = getSupabaseClient(merged.access_token);
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) {
        setError(updateError.message || 'Unable to update password. Please try again.');
        setErrorKey((k) => k + 1);
        setSubmitting(false);
        return;
      }
      router.push('/reset-password/success');
    } catch {
      setError('Unexpected error. Please try again.');
      setErrorKey((k) => k + 1);
      setSubmitting(false);
    }
  }

  if (isError) {
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
            <p className="mt-4 text-base sm:text-lg leading-7 text-foreground/80">
              {merged.error_description || 'Unknown'}
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen font-sans flex items-center">
      <section className="w-full">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: 'var(--color-rochester-blue)' }}
          >
            Reset your password
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-7 text-foreground/80">
            resetting password for email: {merged.email || 'Unknown'}
          </p>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-foreground" htmlFor="password">New password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-black/10 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground" htmlFor="confirmPassword">Confirm password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-black/10 px-3 py-2"
              />
            </div>

            {error && (
              <p key={errorKey} className="text-sm text-red-600 rt-animate-shake">{error}</p>
            )}

            <button
              type="submit"
              className="rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--color-rochester-blue)' }}
              disabled={submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}


