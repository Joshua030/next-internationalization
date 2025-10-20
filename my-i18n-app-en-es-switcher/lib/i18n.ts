type Dict = Record<string, string>;

export type Supported = 'en' | 'es';

export async function getDict(locale: Supported): Promise<Dict> {
  switch (locale) {
    case 'es':
      return (await import('@/locales/es/common.json')).default as Dict;
    case 'en':
    default:
      return (await import('@/locales/en/common.json')).default as Dict;
  }
}
