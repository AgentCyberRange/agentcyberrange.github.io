import type { ReactNode } from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import faviconUrl from '../assets/agent-cyber-range-mark.svg?url'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title:
          'AgentCyberRange: Benchmarking Frontier AI Systems in Realistic Cyber Ranges',
      },
      {
        name: 'description',
        content:
          'Official project page for AgentCyberRange, a benchmark for evaluating frontier AI systems on realistic cyber attacks.',
      },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: faviconUrl,
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans text-slate-700 antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
