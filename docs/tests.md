## E2E Tests

### confirm-signup.spec.ts
- Pre-screen with confirmation_url: `/confirm-signup?confirmation_url=https%3A%2F%2Fexample.com%2Fconfirm%3Ftoken%3Dabc`
  - Expects heading “Click this button to confirm your email” and a primary action labeled “Confirm email” linking to `https://example.com/confirm?token=abc`.
- Success with email: `/confirm-signup?access_token=abc123&email=student%40rochester.edu`
  - Expects heading “Email confirmed” and text “You can now log in with student@rochester.edu”.
- Success without email: `/confirm-signup?access_token=abc123`
  - Expects heading “Email confirmed” and text “You can now log in.”
- Error with description: `/confirm-signup?error=token_expired&error_description=Your%20confirmation%20link%20has%20expired`
  - Expects heading “Oops, we couldn't confirm your email”, visible mailto support link, and details “Your confirmation link has expired”.
- Error without description: `/confirm-signup?error=unknown_error`
  - Expects heading above and details “Unknown”.
- No params: `/confirm-signup`
  - Expects heading above and details “Unknown”.
- Fragment error params (from auth providers): `/confirm-signup#error=access_denied&error_code=otp_expired&error_description=Email%20link%20is%20invalid%20or%20has%20expired`
  - Expects heading above and details “Email link is invalid or has expired”.

### privacy-policy.spec.ts
- Route: `/privacy-policy`
  - Returns 200.
  - Shows heading “Privacy Policy”.
  - Shows “Last updated: October 14, 2025”.
  - Contains sections “Interpretation and Definitions”, “Collecting and Using Your Personal Data”, “Children's Privacy”.
  - Displays contact email `contact@roctrades.com`.

### terms-of-service.spec.ts
- Route: `/terms-of-service`
  - Returns 200.
  - Shows heading “Terms of Service”.
  - Shows “Last updated: October 14, 2025”.
  - Intro references RocTrades, New York, and mobile app description.
  - TOC items include “1. OUR SERVICES” and “2. INTELLECTUAL PROPERTY RIGHTS”.
  - Displays contact email `contact@roctrades.com` and “Rochester, NY 14627”.

### homepage-footer.spec.ts
- Home route: `/`
  - Footer is visible and contains links labeled “Privacy Policy” and “Terms of Service”.
  - Links point to `/privacy-policy` and `/terms-of-service` respectively.

### account-deletion-guide.spec.ts
- Route: `/guides/account-deletion`
  - Shows H1 “Delete RocTrades Account”.
  - Intro mentions both “iOS” and “Android” (same procedure).
  - Breadcrumbs nav exists (`aria-label="Breadcrumbs"`) with links to `/` and `/guides` and current page label.
  - Six steps rendered with H2 headings “Step 1” … “Step 6”.
  - Each step displays an image with `alt` containing “Step N” pointing to `/guides/account-deletion/N.jpg`.
  - Callout note includes “takes about a minute”; Step 6 heading includes “Success Prompt”.
  - No horizontal overflow at 1280×800 and 375×812.

Run:

```bash
npm run test
```


### reset-password.spec.ts
- Fragment with access_token and email: `/reset-password#access_token=abc123&type=recovery&email=student%40rochester.edu`
  - Expects heading “Reset your password”, password and confirm fields, and a Submit button.
- Successful update: fill matching passwords and click Submit
  - Expects navigation to `/reset-password/success`, heading “Password updated”, and text “Successfully updated password, please get back to the app.”
- Validation failure: mismatch passwords
  - Expects inline error text “Passwords do not match.”.
- Validation failure: password too short
  - Expects inline error text “Password must be at least 6 characters.”
- Fragment error params: `/reset-password#error=access_denied&error_code=otp_expired&error_description=Email%20link%20is%20invalid%20or%20has%20expired`
  - Expects redirect to `/reset-password/error` and details “Email link is invalid or has expired”.