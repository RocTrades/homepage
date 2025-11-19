export const metadata = {
  title: "Guides | RocTrades",
  description: "Guides to help you use the RocTrades mobile app.",
};

export default function GuidesIndexPage() {
  return (
    <main className="min-h-screen font-sans">
      <section className="w-full">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ color: "var(--color-rochester-blue)" }}
          >
            Guides
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-7 text-foreground/80">
            Step-by-step walkthroughs for common tasks in the RocTrades mobile
            app.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="border border-black/10 rounded-lg p-5 hover:bg-black/5 transition">
              <a
                href="/guides/account-deletion"
                className="block"
                aria-label="Delete RocTrades Account guide"
              >
                <h2 className="text-xl font-semibold text-foreground">
                  Delete RocTrades Account
                </h2>
                <p className="mt-2 text-foreground/70">
                  Learn how to permanently delete your RocTrades account from
                  the mobile app.
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}


