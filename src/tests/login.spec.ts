import { test, expect } from '@playwright/test';

import LoginPage from '../pages/login.page';
import MyClustersPage from '../pages/my-clusters.page';

test.describe('Sign in', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  let loginPage: LoginPage;
  let myClusterPage: MyClustersPage;

  test('Verify sign in', async ({ page }) => {
    loginPage = new LoginPage(page);
    myClusterPage = new MyClustersPage(page);

    await loginPage.navigate();
    await expect(loginPage.signInTitle).toBeVisible();

    await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);
    await expect(myClusterPage.myClusterTitle).toBeVisible();
  });
});
