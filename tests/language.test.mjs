import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  getPreferredLanguage,
  saveLanguagePreference,
} from '../src/lib/language.ts'

const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window')

afterEach(() => {
  if (originalWindow) {
    Object.defineProperty(globalThis, 'window', originalWindow)
  } else {
    delete globalThis.window
  }
})

function setBrowser({ languages = ['en-US'], language = 'en-US', saved } = {}) {
  const storage = new Map(saved === undefined ? [] : [[LANGUAGE_STORAGE_KEY, saved]])
  Object.defineProperty(globalThis, 'window', {
    configurable: true,
    value: {
      navigator: { languages, language },
      localStorage: {
        getItem: (key) => storage.get(key) ?? null,
        setItem: (key, value) => storage.set(key, value),
      },
    },
  })
  return storage
}

for (const [name, languages, expected] of [
  ['English region variant', ['en-GB'], 'en'],
  ['Chinese region variant', ['zh-TW'], 'zh'],
  ['Chinese script variant', ['zh-Hant-HK'], 'zh'],
  ['case-insensitive language tag', ['EN-us'], 'en'],
  ['first supported preference', ['fr-CH', 'en-US', 'zh-CN'], 'en'],
  ['Chinese before English', ['zh-CN', 'en-US'], 'zh'],
  ['English before Chinese', ['en-US', 'zh-CN'], 'en'],
  ['unsupported languages default to English', ['de-CH', 'fr-CH'], 'en'],
  ['unrelated Chinese language prefixes are not matched', ['zhuang'], 'en'],
  ['unrelated English language prefixes are not matched', ['enochian', 'zh-CN'], 'zh'],
]) {
  test(name, () => {
    setBrowser({ languages })
    assert.equal(getPreferredLanguage(), expected)
  })
}

test('navigator.language is used when the preference list is empty or unavailable', () => {
  for (const languages of [[], undefined]) {
    setBrowser({ language: 'en-AU' })
    window.navigator.languages = languages
    assert.equal(getPreferredLanguage(), 'en')
  }
})

test('a saved manual choice takes priority over browser preferences', () => {
  setBrowser({ languages: ['en-US'], saved: 'zh' })
  assert.equal(getPreferredLanguage(), 'zh')
  setBrowser({ languages: ['zh-CN'], saved: 'en' })
  assert.equal(getPreferredLanguage(), 'en')
})

test('invalid saved values fall back to browser preferences', () => {
  for (const saved of ['', 'fr', 'null', 'ZH']) {
    setBrowser({ languages: ['en-US'], saved })
    assert.equal(getPreferredLanguage(), 'en')
  }
})

test('automatic detection stays responsive to browser preferences without saving a choice', () => {
  const storage = setBrowser({ languages: ['en-US'] })
  assert.equal(getPreferredLanguage(), 'en')
  assert.equal(storage.has(LANGUAGE_STORAGE_KEY), false)
  window.navigator.languages = ['zh-CN']
  assert.equal(getPreferredLanguage(), 'zh')
})

test('manual choices are persisted and still win after browser preferences change', () => {
  const storage = setBrowser({ languages: ['en-US'] })
  saveLanguagePreference('zh')
  assert.equal(storage.get(LANGUAGE_STORAGE_KEY), 'zh')
  assert.equal(getPreferredLanguage(), 'zh')
  window.navigator.languages = ['zh-CN']
  saveLanguagePreference('en')
  assert.equal(getPreferredLanguage(), 'en')
})

test('blocked localStorage still allows detection and switching', () => {
  setBrowser({ languages: ['en-US'] })
  Object.defineProperty(window, 'localStorage', {
    get() { throw new Error('Storage blocked') },
  })
  assert.equal(getPreferredLanguage(), 'en')
  assert.doesNotThrow(() => saveLanguagePreference('zh'))
})

test('storage write failures do not prevent switching', () => {
  setBrowser()
  window.localStorage.setItem = () => { throw new Error('Quota exceeded') }
  assert.doesNotThrow(() => saveLanguagePreference('zh'))
})

test('server rendering defaults to English without browser globals', () => {
  delete globalThis.window
  assert.equal(DEFAULT_LANGUAGE, 'en')
  assert.equal(getPreferredLanguage(), DEFAULT_LANGUAGE)
  assert.doesNotThrow(() => saveLanguagePreference('en'))
})
