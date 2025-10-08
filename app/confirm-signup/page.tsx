import ConfirmSignupClient from "./ConfirmSignupClient";

export default async function ConfirmSignupPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolved = await searchParams;

  const getParam = (key: string): string | undefined => {
    const value = resolved?.[key];
    if (Array.isArray(value)) return value[0];
    return value;
  };

  return (
    <ConfirmSignupClient
      initialAccessToken={getParam("access_token")}
      initialEmail={getParam("email")}
      initialError={getParam("error")}
      initialErrorDescription={getParam("error_description")}
      initialConfirmationUrl={getParam("confirmation_url")}
      hasAnyInitialParams={Object.keys(resolved || {}).length > 0}
    />
  );
}


