import ResetPasswordClient from './ResetPasswordClient';

export default async function ResetPasswordPage() {
  // Server component only renders the client; hash parsing happens client-side
  return <ResetPasswordClient />;
}


