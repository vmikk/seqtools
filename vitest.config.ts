/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})
