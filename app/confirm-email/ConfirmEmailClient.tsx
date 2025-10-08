"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Props = {
  initialAccessToken?: string;
  initialEmail?: string;
  initialError?: string;
  initialErrorDescription?: string;
  hasAnyInitialParams: boolean;
};

function parseHashParams(hash: string): Record<string, string> {
  const raw = hash.startsWith("#") ? hash.slice(1) : hash;
  const params = new URLSearchParams(raw);
  const result: Record<string, string> = {};
  params.forEach((value, key) => {
    if (!(key in result)) result[key] = value;
  });
  return result;
}

export default function ConfirmEmailClient(props: Props) {
  const [fragmentParams, setFragmentParams] = useState<Record<string, string>>({});

  useEffect(() => {
    // Read fragment on mount and on hash changes
    const read = () => setFragmentParams(parseHashParams(window.location.hash));
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const merged = useMemo(() => {
    // Fragment params override initial (query) when present
    return {
      access_token: fragmentParams.access_token ?? props.initialAccessToken,
      email: fragmentParams.email ?? props.initialEmail,
      error: fragmentParams.error ?? props.initialError,
      error_description:
        fragmentParams.error_description ?? props.initialErrorDescription,
      hasAny:
        Object.keys(fragmentParams).length > 0 || props.hasAnyInitialParams,
    };
  }, [fragmentParams, props.initialAccessToken, props.initialEmail, props.initialError, props.initialErrorDescription, props.hasAnyInitialParams]);

  const isSuccess = Boolean(merged.access_token);
  const isError = !isSuccess && (Boolean(merged.error) || !merged.hasAny);

  return (
    <main className="min-h-screen font-sans flex items-center">
      <section className="w-full">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
          {isSuccess && (
            <div>
              <h1
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "var(--color-rochester-blue)" }}
              >
                Email confirmed
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-7 text-foreground/80">
                Your email has been confirmed successfully.
              </p>
              <p className="mt-2 text-base sm:text-lg leading-7 text-foreground">
                {merged.email ? (
                  <span>
                    You can now log in with <strong>{merged.email}</strong>.
                  </span>
                ) : (
                  <span>You can now log in.</span>
                )}
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm inline-block"
                  style={{ backgroundColor: "var(--color-rochester-blue)" }}
                >
                  Go to homepage
                </Link>
              </div>
            </div>
          )}

          {isError && (
            <div>
              <h1
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "var(--color-rochester-blue)" }}
              >
                Oops, we couldn&apos;t confirm your email
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-7 text-foreground/80">
                Please contact <a
                  href="mailto:contact@roctrades.com"
                  className="underline"
                >contact@roctrades.com</a> for assistance.
              </p>
              <p className="mt-2 text-sm text-foreground/70">
                Error details: {merged.error_description || "Unknown"}
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm inline-block"
                  style={{ backgroundColor: "var(--color-rochester-blue)" }}
                >
                  Go to homepage
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}


