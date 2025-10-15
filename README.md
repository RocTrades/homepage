This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Testing

End-to-end tests use Playwright.

1) Install dependencies and browsers (run in PowerShell or CMD on Windows):

```bash
npm i
npx playwright install
```

2) Run tests (headless by default):

```bash
npm run test
```

Optional:

```bash
# headed (visible browser)
npm run test:headed

# Playwright Test UI
npm run test:ui
```

Notes:
- The config starts the dev server automatically (`npm run dev`) and targets `http://localhost:3000`.
- To run a single file: `npx playwright test tests/confirm-email.spec.ts`.

## Environment

Create a `.env.local` file with public Supabase vars:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://ycvyvpanzpvcmnujprtg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inljdnl2cGFuenB2Y21udWpwcnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMTg2NDEsImV4cCI6MjA3Mzc5NDY0MX0.cdj3ELvr7yI66bUYLtfh5_qs1l_tpiKFHzhPYdsbyEY
```

Optional for test runs to avoid real network calls during E2E:

```bash
NEXT_PUBLIC_E2E=1
```

## Development instruction

This is a vibe-first codebase. See `docs/vibes.md` for the chatbot guidelines used in this repo.

- When vibe coding with Cursor agent or a similar IDE assistant, attach the contents of `docs/vibes.md` to the chatbot so it enforces the intended workflow.

### Environment variables
- Create an `.env.local` in your directory with the following content:
    ```
    # .env.local
    NEXT_PUBLIC_SUPABASE_URL=https://ycvyvpanzpvcmnujprtg.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inljdnl2cGFuenB2Y21udWpwcnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMTg2NDEsImV4cCI6MjA3Mzc5NDY0MX0.cdj3ELvr7yI66bUYLtfh5_qs1l_tpiKFHzhPYdsbyEY
    # Should be 1 for testing reset-password flow
    NEXT_PUBLIC_E2E=1
    ```
