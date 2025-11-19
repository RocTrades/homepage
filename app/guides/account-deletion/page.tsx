/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Delete RocTrades Account | RocTrades Guides",
  description:
    "A step-by-step guide to delete your RocTrades account from the mobile app. The process is the same on iOS and Android.",
  openGraph: {
    title: "Delete RocTrades Account | RocTrades Guides",
    description:
      "A step-by-step guide to delete your RocTrades account from the mobile app. The process is the same on iOS and Android.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delete RocTrades Account | RocTrades Guides",
    description:
      "A step-by-step guide to delete your RocTrades account from the mobile app. The process is the same on iOS and Android.",
  },
};

export default function AccountDeletionGuidePage() {
  return (
    <main className="min-h-screen font-sans">
      <section className="w-full">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
          <nav
            className="text-sm text-foreground/70"
            aria-label="Breadcrumbs"
          >
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link className="underline hover:text-foreground" href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link className="underline hover:text-foreground" href="/guides">Guides</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                Delete RocTrades Account
              </li>
            </ol>
          </nav>

          <h1
            className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ color: "var(--color-rochester-blue)" }}
          >
            Delete RocTrades Account
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-7 text-foreground/80">
            Follow these steps to delete your RocTrades account permanently.
            This procedure is the same on iOS and Android.
          </p>

          <div
            className="mt-6 rounded-md border border-black/10 p-4"
            style={{ backgroundColor: "var(--color-rochester-yellow)", color: "#111827" }}
            role="note"
          >
            <p className="text-sm sm:text-base">
              Account deletion usually <strong>takes about a minute</strong>. When it's finished,
              you'll see a <strong>success prompt</strong> confirming the deletion.
            </p>
          </div>

          <p className="mt-6 text-base leading-7 text-foreground/80">
            Need help? Please contact us at{" "}
            <a href="mailto:contact@roctrades.com" className="underline">
              contact@roctrades.com
            </a>{" "}
            for more assistance.
          </p>

          <details className="mt-12 rounded-md border border-black/10">
            <summary className="cursor-pointer px-4 py-3 text-base sm:text-lg font-semibold text-foreground">
              Account deletion information (Google Play)
            </summary>
            <div className="px-4 pb-4 pt-2">
              <p className="mt-2 text-base leading-7 text-foreground/80">
                App: <span className="font-semibold">RocTrades</span>. Developer:{" "}
                <span className="font-semibold">RocTrades Team</span>.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-foreground">
                Steps to request account deletion
              </h3>
              <ul className="mt-2 list-disc pl-6 text-base leading-7 text-foreground/80">
                <li>
                  In the app, go to <a href="#step-1" className="underline">Account</a> →{" "}
                  <a href="#step-2" className="underline">Settings</a> →{" "}
                  <a href="#step-4" className="underline">Delete Account</a>, then{" "}
                  <a href="#step-5" className="underline">confirm deletion</a>.
                </li>
                <li>
                  If you cannot access the app, email{" "}
                  <a href="mailto:contact@roctrades.com" className="underline">
                    contact@roctrades.com
                  </a>{" "}
                  with the subject “Account deletion request” from your registered email address.
                </li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold text-foreground">
                Data deleted vs kept, and retention
              </h3>
              <ul className="mt-2 list-disc pl-6 text-base leading-7 text-foreground/80">
                <li>
                  <span className="font-semibold">Deleted</span>: your listings and draft listings; purchase
                  history; favorites listing history; account credentials and profile information
                  (email, password); personal information you provided (school year, hall location, major);
                  and related media.
                </li>
                <li>
                  <span className="font-semibold">Temporarily retained</span>: minimal audit/support
                  logs and system backups may persist for a limited period (up to 30–90 days) for
                  security, anti‑abuse, and disaster recovery, after which they are purged.
                </li>
                <li>
                  <span className="font-semibold">Kept (non‑personal)</span>: aggregate or de‑identified
                  analytics that do not identify you may be retained to improve service quality.
                </li>
              </ul>
            </div>
          </details>

          <div className="mt-10 space-y-16">
            <section aria-labelledby="step-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                  <h2 id="step-1" className="text-2xl font-bold text-foreground">
                    Step 1 — Open Account
                  </h2>
                  <p className="mt-2 text-base leading-7 text-foreground/80">
                    Make sure you are logged into your account and on your home
                    page. Tap <span className="font-semibold">Account</span> in the bottom-right corner.
                  </p>
                </div>
                <div className="md:justify-self-end">
                  <Image
                    src="/guides/account-deletion/1.jpg"
                    alt="Step 1 — Open Account"
                    width={900}
                    height={1900}
                    className="w-full h-auto rounded-md border border-black/10"
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                    priority
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="step-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                  <h2 id="step-2" className="text-2xl font-bold text-foreground">
                    Step 2 — Scroll to Settings
                  </h2>
                  <p className="mt-2 text-base leading-7 text-foreground/80">
                    In the Account area, scroll to the bottom. You should see a{" "}
                    <span className="font-semibold">Settings</span> section.
                  </p>
                </div>
                <div className="md:justify-self-end">
                  <Image
                    src="/guides/account-deletion/2.jpg"
                    alt="Step 2 — Scroll to Settings"
                    width={900}
                    height={1900}
                    className="w-full h-auto rounded-md border border-black/10"
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="step-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                  <h2 id="step-3" className="text-2xl font-bold text-foreground">
                    Step 3 — Open Settings
                  </h2>
                  <p className="mt-2 text-base leading-7 text-foreground/80">
                    Tap on <span className="font-semibold">Settings</span>.
                  </p>
                </div>
                <div className="md:justify-self-end">
                  <Image
                    src="/guides/account-deletion/3.jpg"
                    alt="Step 3 — Open Settings"
                    width={900}
                    height={1900}
                    className="w-full h-auto rounded-md border border-black/10"
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="step-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                  <h2 id="step-4" className="text-2xl font-bold text-foreground">
                    Step 4 — Tap Delete Account
                  </h2>
                  <p className="mt-2 text-base leading-7 text-foreground/80">
                    Inside Settings, tap the <span className="font-semibold">Delete Account</span> button.
                  </p>
                </div>
                <div className="md:justify-self-end">
                  <Image
                    src="/guides/account-deletion/4.jpg"
                    alt="Step 4 — Tap Delete Account"
                    width={900}
                    height={1900}
                    className="w-full h-auto rounded-md border border-black/10"
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="step-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                  <h2 id="step-5" className="text-2xl font-bold text-foreground">
                    Step 5 — Confirm Deletion
                  </h2>
                  <p className="mt-2 text-base leading-7 text-foreground/80">
                    Confirm that you really want to delete your account. Tap{" "}
                    <span className="font-semibold">Delete</span> if you've made up your mind.
                  </p>
                </div>
                <div className="md:justify-self-end">
                  <Image
                    src="/guides/account-deletion/5.jpg"
                    alt="Step 5 — Confirm Deletion"
                    width={900}
                    height={1900}
                    className="w-full h-auto rounded-md border border-black/10"
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="step-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                  <h2 id="step-6" className="text-2xl font-bold text-foreground">
                    Step 6 — Success Prompt
                  </h2>
                  <p className="mt-2 text-base leading-7 text-foreground/80">
                    The deletion process takes about a minute. Once complete,
                    you'll see a success prompt confirming your account has been deleted.
                  </p>
                </div>
                <div className="md:justify-self-end">
                  <Image
                    src="/guides/account-deletion/6.jpg"
                    alt="Step 6 — Success Prompt"
                    width={900}
                    height={1900}
                    className="w-full h-auto rounded-md border border-black/10"
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}


