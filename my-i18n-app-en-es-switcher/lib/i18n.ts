import es from "@/locales/es/common.json";
import en from "@/locales/en/common.json";

// Infer the type of keys automatically
export type TranslationKeys = keyof typeof es;

// Dictionary type using known keys
export type Dict = Record<TranslationKeys, string>;

export type Supported = "en" | "es";

export async function getDict(locale: Supported): Promise<Dict> {
  switch (locale) {
    case "es":
      return (await import("@/locales/es/common.json")).default as Dict;
    case "en":
    default:
      return (await import("@/locales/en/common.json")).default as Dict;
  }
}
