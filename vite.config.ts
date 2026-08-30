import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      globals: {
        Buffer: true,
        global: false,
        process: false,
      },
    }),
  ],
  base: '/terminal-portfolio/',
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
