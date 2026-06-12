import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[var(--bg-page)] px-6 text-center text-[var(--text-primary)]">
      <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--text-muted)]">
        404 · page not found
      </p>
      <h1 className="font-serif text-3xl font-bold tracking-tight">
        This page doesn’t exist
      </h1>
      <a
        href="/"
        className="rounded-lg bg-[#2C4E59] px-5 py-2.5 text-sm text-white transition-colors hover:bg-[#2C3759]"
      >
        Back to AgentCyberRange
      </a>
    </div>
  )
}

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultNotFoundComponent: NotFound,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
