import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { defaultLocale, isValidLocale } from "@/i18n/config";

export default async function RootPage() {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("govern-locale")?.value;
  if (isValidLocale(cookieLocale)) redirect(`/${cookieLocale}`);

  const accept = (await headers()).get("accept-language")
    ?.split(",")[0]
    ?.split("-")[0]
    ?.toLowerCase();
  if (isValidLocale(accept)) redirect(`/${accept}`);

  redirect(`/${defaultLocale}`);
}
