import ConfirmEmailClient from "./ConfirmEmailClient";

export default async function ConfirmEmailPage({
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
    <ConfirmEmailClient
      initialAccessToken={getParam("access_token")}
      initialEmail={getParam("email")}
      initialError={getParam("error")}
      initialErrorDescription={getParam("error_description")}
      hasAnyInitialParams={Object.keys(resolved || {}).length > 0}
    />
  );
}


