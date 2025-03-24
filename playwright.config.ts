import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    env: {
      PORT: "3001",
    },
    command: "pnpm run dev",
    port: 3001,
  },
  testDir: "./tests",
});
