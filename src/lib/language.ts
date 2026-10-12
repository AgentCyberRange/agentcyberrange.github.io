export type Language = 'en' | 'zh'

export const DEFAULT_LANGUAGE: Language = 'en'
export const LANGUAGE_STORAGE_KEY = 'agentcyberrange-language'

function isLanguage(value: string | null): value is Language {
  return value === 'en' || value === 'zh'
}

export function getPreferredLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (isLanguage(savedLanguage)) return savedLanguage
  } catch {
    // Browser privacy settings can make localStorage unavailable.
  }

  const { languages, language } = window.navigator
  const preferredLanguages = languages?.length ? languages : [language]

  for (const locale of preferredLanguages) {
    const baseLanguage = locale.toLowerCase().split('-')[0]
    if (isLanguage(baseLanguage)) return baseLanguage
  }

  return DEFAULT_LANGUAGE
}

export function saveLanguagePreference(language: Language): void {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch {
    // The current page can still switch languages without persistent storage.
  }
}
