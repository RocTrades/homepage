export default function ResetPasswordSuccessPage() {
  return (
    <main className="min-h-screen font-sans flex items-center">
      <section className="w-full">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: 'var(--color-rochester-blue)' }}
          >
            Password updated
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-7 text-foreground/80">
            Successfully updated password, please get back to the app.
          </p>
        </div>
      </section>
    </main>
  );
}


