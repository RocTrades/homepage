## E2E Tests

### confirm-email.spec.ts
- Success with email: `/confirm-email?access_token=abc123&email=student%40rochester.edu`
  - Expects heading “Email confirmed” and text “You can now log in with student@rochester.edu”.
- Success without email: `/confirm-email?access_token=abc123`
  - Expects heading “Email confirmed” and text “You can now log in.”
- Error with description: `/confirm-email?error=token_expired&error_description=Your%20confirmation%20link%20has%20expired`
  - Expects heading “Oops, we couldn't confirm your email”, visible mailto support link, and details “Your confirmation link has expired”.
- Error without description: `/confirm-email?error=unknown_error`
  - Expects heading above and details “Unknown”.
- No params: `/confirm-email`
  - Expects heading above and details “Unknown”.
- Fragment error params (from auth providers): `/confirm-email#error=access_denied&error_code=otp_expired&error_description=Email%20link%20is%20invalid%20or%20has%20expired`
  - Expects heading above and details “Email link is invalid or has expired”.

Run:

```bash
npm run test
```

