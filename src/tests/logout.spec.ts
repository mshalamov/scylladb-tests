import { test, expect } from '@playwright/test';

import LoginPage from '../pages/login.page';
import MyClusterPage from '../pages/my-clusters.page';

test.describe('Sign out', () => {
  let loginPage: LoginPage;
  let myClusterPage: MyClusterPage;

  test('Verify sign out', async ({ page }) => {
    loginPage = new LoginPage(page);
    myClusterPage = new MyClusterPage(page);

    await myClusterPage.navigate();
    await expect(myClusterPage.myClusterTitle).toBeVisible();

    await myClusterPage.headerComponent().logout();
    await expect(loginPage.signInTitle).toBeVisible();
  });
});
