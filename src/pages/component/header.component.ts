import { Page, Locator /* expect */ } from '@playwright/test';

class HeaderComponent {
  page: Page;
  aVatar: Locator;
  signOut: Locator;

  constructor(page: Page) {
    this.page = page;
    this.aVatar = page.locator('//div[@data-element="Avatar"]');
    this.signOut = page.locator('text=Sign out');
  }

  async logout() {
    await this.aVatar.click();
    await this.signOut.click();
  }
}

export default HeaderComponent;
