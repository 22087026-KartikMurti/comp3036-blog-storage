import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    reuseExistingServer: true,
    env: {
      PORT: "3000",
    },
    command: "pnpm run dev",
    port: 3000,
  },
  testDir: "./tests",
});
