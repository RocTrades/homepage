## RocTrades – Homepage v0 Design Decisions

### Goals
- Intro-only landing for a mobile-first product; route users to app stores.
- Convey value quickly: buy/sell safely on campus, student-only access.
- Use minimal dependencies, leverage Tailwind v4-in-PostCSS already configured.

### Tech Choices
- Framework: Next.js App Router (already configured in `src/app`).
- Styling: Tailwind v4 via `@tailwindcss/postcss` with inline `@theme` tokens in `globals.css`.
- Fonts: Using `Geist` defaults from template for speed; can swap later.

### Brand System
- Product name: RocTrades (University of Rochester student audience).
- Colors added as CSS variables exposed to Tailwind via `@theme` in `src/app/globals.css`:
  - `--color-rochester-blue: #003B71` (primary)
  - `--color-rochester-yellow: #F2A900` (accent)
- Rationale: Align with University of Rochester palette for instant familiarity; keep usage minimal for accessibility contrast.

### IA and Sections (MVP)
- Hero: RocTrades name, one-line pitch, store buttons.
- Store CTAs: App Store / Google Play with environment-driven URLs.
- Disclaimer: not affiliated statement.

### Content Strategy
- Audience qualifier: “For University of Rochester students” badge in yellow for quick scannability.
- Value prop emphasizes on-campus, safe exchanges and `.rochester.edu` login intent.

### Accessibility & UX
- High-contrast primary actions using Rochester Blue background with white text.
- Text scales at `sm:` breakpoints; layout constrained to `max-w-6xl` for readability.
- Semantic structure: sections with IDs for in-page navigation (`#how-it-works`, `#browse`).

### SEO / Metadata
- Updated in `src/app/layout.tsx` to emphasize mobile app and RocTrades brand.
- `metadataBase` currently `https://example.com`; replace with production domain.

### Environment Variables
- `NEXT_PUBLIC_APP_STORE_URL`: iOS App Store link (e.g., `https://apps.apple.com/app/idXXXXXXXXX`).
- `NEXT_PUBLIC_PLAY_STORE_URL`: Google Play link (e.g., `https://play.google.com/store/apps/details?id=com.example.app`).
- These are optional; if unset, the UI shows "Coming soon" placeholders.

### What’s NOT in v0
- Auth and `.rochester.edu` verification, real listings, chat, payments — placeholders only.
- Full brand typography, logo, or complex components — kept intentionally simple.

### Next Steps (Proposed)
- Add `auth` page with email domain gating (`@rochester.edu`).
- Create `listings` route and a simple JSON-backed or mock API.
- Introduce a reusable `Button` and `Card` component with tokens.
- Add favicon/OG image branded to UR colors.

