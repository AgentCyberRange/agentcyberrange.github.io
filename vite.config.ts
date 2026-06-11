import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
  base: './',
  publicDir: false,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  plugins: [
    tanstackStart({
      spa: {
        enabled: true,
      },
    }),
    react(),
  ],
})
