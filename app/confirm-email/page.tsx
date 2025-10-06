export default function ConfirmEmailPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const getParam = (key: string): string | undefined => {
    const value = searchParams?.[key];
    if (Array.isArray(value)) return value[0];
    return value;
  };

  const accessToken = getParam("access_token");
  const email = getParam("email");
  const error = getParam("error");
  const errorDescription = getParam("error_description");
  const hasAnyParams = Object.keys(searchParams || {}).length > 0;

  const isSuccess = Boolean(accessToken);
  const isError = !isSuccess && (Boolean(error) || !hasAnyParams);

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
                {email ? (
                  <span>
                    You can now log in with <strong>{email}</strong>.
                  </span>
                ) : (
                  <span>You can now log in.</span>
                )}
              </p>
              <div className="mt-8">
                <a
                  href="/"
                  className="rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm inline-block"
                  style={{ backgroundColor: "var(--color-rochester-blue)" }}
                >
                  Go to homepage
                </a>
              </div>
            </div>
          )}

          {isError && (
            <div>
              <h1
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "var(--color-rochester-blue)" }}
              >
                Oops, we couldn't confirm your email
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-7 text-foreground/80">
                Please contact <a
                  href="mailto:contact@roctrades.com"
                  className="underline"
                >contact@roctrades.com</a> for assistance.
              </p>
              <p className="mt-2 text-sm text-foreground/70">
                Error details: {errorDescription || "Unknown"}
              </p>
              <div className="mt-8">
                <a
                  href="/"
                  className="rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm inline-block"
                  style={{ backgroundColor: "var(--color-rochester-blue)" }}
                >
                  Go to homepage
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}


