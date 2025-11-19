export default function Home() {
  const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL || "https://apps.apple.com/ng/app/roctrades/id6754180431";
  const playStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL;

  return (
    <main className="min-h-screen font-sans flex flex-col">
      <section className="w-full flex-1 flex items-center">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: "var(--color-rochester-yellow)", color: "#111827" }}>
            For University of Rochester students
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: "var(--color-rochester-blue)" }}>
            RocTrades
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-7 text-foreground/80">
            Our marketplace lives on mobile. Download the app to buy, sell, and trade
            with classmates and meet up on campus.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {appStoreUrl ? (
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl h-12 inline-flex items-center justify-center w-full sm:w-auto text-center"
                aria-label="Download on the App Store"
              >
                <img
                  src="/badges/apple_app_store_download_button.svg"
                  alt="Download on the App Store"
                  className="h-12 w-auto select-none"
                  draggable={false}
                />
              </a>
            ) : (
              <span className="rounded-md px-5 py-3 text-sm font-semibold text-foreground/60 border border-black/10 w-full sm:w-auto text-center">
                App Store: Coming soon
              </span>
            )}

            {playStoreUrl ? (
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl h-12 inline-flex items-center justify-center w-full sm:w-auto text-center"
                aria-label="Get it on Google Play"
              >
                <img
                  src="/badges/google_play_store_download_button.svg"
                  alt="Get it on Google Play"
                  className="h-12 w-auto select-none"
                  draggable={false}
                />
              </a>
            ) : (
              <span className="rounded-md px-5 py-3 text-sm font-semibold text-foreground/60 border border-black/10 w-full sm:w-auto text-center">
                Google Play: Coming soon
              </span>
            )}
          </div>

          <p className="mt-6 text-xs text-foreground/60">
            RocTrades is not affiliated with the University of Rochester.
          </p>
        </div>
      </section>

    </main>
  );
}
