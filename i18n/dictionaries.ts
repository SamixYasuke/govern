import type { Locale } from "./config";
import en from "../messages/en.json";
import yo from "../messages/yo.json";
import ig from "../messages/ig.json";
import ha from "../messages/ha.json";

const dictionaries = { en, yo, ig, ha } as const;

export type Messages = typeof en;

export function getMessages(locale: Locale): Messages {
  return (dictionaries[locale] ?? en) as Messages;
}
