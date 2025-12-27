import en from './locales/en.json';
import es from './locales/es.json';

// Define supported languages
export const LANGUAGES = {
  en: 'en',
  es: 'es',
} as const;

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];

// Type-safe translation lookup
type TranslationKey = keyof typeof en;

const translations: Record<Language, Record<TranslationKey, string>> = {
  en,
  es,
};

/**
 * Get a translation string by key and language
 * @param key - The translation key (e.g., "hero.headline")
 * @param lang - The language code (e.g., "en", "es")
 * @returns The translated string, or the key if not found
 */
export function getTranslation(
  key: TranslationKey,
  lang: Language = 'en'
): string {
  if (!isValidLanguage(lang)) {
    lang = 'en';
  }

  const translation = translations[lang]?.[key];
  return translation || key;
}

/**
 * Get all translations for a specific language
 * @param lang - The language code (e.g., "en", "es")
 * @returns The translations object for that language
 */
export function getLanguageTranslations(
  lang: Language = 'en'
): Record<TranslationKey, string> {
  if (!isValidLanguage(lang)) {
    lang = 'en';
  }
  return translations[lang] || translations.en;
}

/**
 * Check if a language code is valid
 * @param lang - The language code to validate
 * @returns True if the language is supported, false otherwise
 */
export function isValidLanguage(lang: unknown): lang is Language {
  return lang === 'en' || lang === 'es';
}

/**
 * Get the language from the URL pathname
 * @param pathname - The URL pathname (e.g., "/en/about", "/es/servicios")
 * @returns The language code or 'en' if not found
 */
export function getLanguageFromPath(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean);
  const potentialLang = segments[0];

  if (isValidLanguage(potentialLang)) {
    return potentialLang;
  }

  return 'en';
}

/**
 * Get the current language from Astro context
 * @param params - Astro route params object
 * @returns The language code
 */
export function getCurrentLanguage(params: Record<string, any>): Language {
  const lang = params.lang;
  
  if (isValidLanguage(lang)) {
    return lang;
  }

  return 'en';
}

/**
 * Translate a key with the given language
 * Alias for getTranslation for convenience
 * @param key - The translation key
 * @param lang - The language code
 * @returns The translated string
 */
export function t(key: TranslationKey, lang: Language = 'en'): string {
  return getTranslation(key, lang);
}

/**
 * Get the alternative language (switch between en and es)
 * @param currentLang - The current language
 * @returns The other language
 */
export function getAlternateLanguage(currentLang: Language): Language {
  return currentLang === 'en' ? 'es' : 'en';
}

/**
 * Build a localized URL path
 * @param path - The path without language prefix (e.g., "/about", "/services")
 * @param lang - The language code
 * @returns The localized path (e.g., "/en/about", "/es/servicios")
 */
export function getLocalizedPath(path: string, lang: Language): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Always include language prefix
  if (lang === 'en') {
    return `/${lang}/${cleanPath}`;
  }
  
  return `/${lang}/${cleanPath}`;
}

/**
 * Get all available languages
 * @returns Array of language codes
 */
export function getAvailableLanguages(): Language[] {
  return ['en', 'es'];
}

/**
 * Get language name in English
 * @param lang - The language code
 * @returns The language name (e.g., "English", "Spanish")
 */
export function getLanguageName(lang: Language): string {
  const names: Record<Language, string> = {
    en: 'English',
    es: 'Español',
  };
  return names[lang] || 'English';
}
