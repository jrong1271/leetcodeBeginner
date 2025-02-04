import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
    environment: 'node', // Set test environment (can be 'jsdom' for browser-like testing)
    coverage: {
      provider: "istanbul"
    },
  },
});