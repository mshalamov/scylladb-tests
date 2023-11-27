import { test as setup, expect } from '@playwright/test';
import { storageStatePath } from '../../playwright.config';

import LoginPage from '../pages/login.page';
import MyClusterPage from '../pages/my-clusters.page';

setup('Do sign in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const myClusterPage = new MyClusterPage(page);

  await loginPage.navigate();
  await expect(loginPage.signInTitle).toBeVisible();

  await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);
  await expect(myClusterPage.myClusterTitle).toBeVisible();

  await page.context().storageState({ path: storageStatePath });
});
