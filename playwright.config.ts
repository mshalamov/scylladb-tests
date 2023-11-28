import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
dotenv.config();

export const storageStatePath = path.join(
  __dirname,
  '.auth/logged-in-state.json',
);

const baseURL = process.env.BASE_URL || 'https://cloud.scylladb.com/';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* Directory where located test scenarios */
  testDir: './src/tests',

  /* Maximum time one test can run for. */
  timeout: 65 * 1000,

  /* Number of reruns of failed tests */
  retries: 1,

  /* Run tests in files in parallel */
  fullyParallel: false,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL,

    /* Whether to run browser in headless mode */
    //headless: true,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Storage state context, contains current cookies and local storage snapshot */
    storageState: storageStatePath,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: '**/login.setup.ts',
    },
    /* Test against desktop browsers. */
    {
      name: 'chromium',
      dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      dependencies: ['setup'],
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      dependencies: ['setup'],
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      dependencies: ['setup'],
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
