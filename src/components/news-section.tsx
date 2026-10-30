import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import type { Language } from '../lib/language'

import { newsItems } from '../content/news'

export function NewsSection({ language }: { language: Language }) {
  const [expanded, setExpanded] = useState(false)
  const zh = language === 'zh'
  useEffect(() => {
    if (window.location.hash !== '#news') return
    const frame = window.requestAnimationFrame(() =>
      document
        .getElementById('news')
        ?.scrollIntoView({ block: 'start', behavior: 'instant' }),
    )
    return () => window.cancelAnimationFrame(frame)
  }, [language])
  return (
    <section
      id="news"
      aria-labelledby="news-title"
      className="news-section mx-auto max-w-[1200px] scroll-mt-24 px-3 pb-5 pt-0 sm:px-5 lg:px-10"
    >
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <h2
            id="news-title"
            className="font-serif text-[2rem] font-bold tracking-tight text-[#413052]"
          >
            {zh ? '最新动态🔥' : 'News🔥'}
          </h2>
          {!zh && (
            <span className="text-sm text-[var(--text-secondary)]">
              Latest updates
            </span>
          )}
        </div>
      </div>
      <ul id="news-list" className="border-y border-[var(--border-default)]">
        {newsItems.slice(0, expanded ? newsItems.length : 4).map((item, index) => (
          <li
            key={item.id}
            className="border-b border-[var(--border-subtle)] last:border-0"
          >
            <div className="news-row grid min-h-14 grid-cols-[112px_96px_minmax(0,1fr)] items-center gap-4 py-4 text-base">
              <time
                dateTime={item.date}
                className={`font-mono text-sm tabular-nums ${index === 0 ? 'font-semibold text-[#2B3270]' : 'text-[var(--text-secondary)]'}`}
              >
                {item.date.replaceAll('-', '.')}
              </time>
              <span
                className={`news-category w-fit whitespace-nowrap rounded px-2 py-1 text-xs font-medium ${index === 0 ? 'bg-[#2B3270]/[0.08] text-[#2B3270]' : 'bg-[#6b6560]/[0.06] text-[var(--text-secondary)]'}`}
              >
                {item.category[language]}
              </span>
              <span className="leading-6 text-[var(--text-primary)] lg:truncate">
                {item.text[language]}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-end pt-4">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="news-list"
          onClick={() => setExpanded(!expanded)}
          className="flex min-h-10 items-center gap-2 rounded px-1 text-xs text-[var(--text-secondary)] hover:text-[#2B3270] focus-visible:outline-2 focus-visible:outline-[#2B3270]"
        >
          {expanded
            ? zh
              ? '收起历史动态'
              : 'Show fewer updates'
            : zh
              ? '查看更早动态'
              : 'Earlier updates'}
          <ArrowDown
            aria-hidden="true"
            className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </section>
  )
}
