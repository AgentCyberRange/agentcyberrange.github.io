import { copyFileSync, existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const clientDir = join(root, 'dist', 'client')
const shell = join(clientDir, '_shell.html')

if (!existsSync(shell)) {
  throw new Error('Expected dist/client/_shell.html after TanStack Start build.')
}

copyFileSync(shell, join(clientDir, 'index.html'))
copyFileSync(shell, join(clientDir, '404.html'))

// Custom domain for GitHub Pages. The CNAME file must live at the published
// site root so GitHub serves this project at the apex domain.
writeFileSync(join(clientDir, 'CNAME'), 'agentcyberrange.io\n')
