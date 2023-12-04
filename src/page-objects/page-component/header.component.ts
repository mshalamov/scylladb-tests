import { Page, Locator /* expect */ } from '@playwright/test'

class HeaderComponent {
  readonly page: Page
  readonly aVatar: Locator
  readonly signOutLink: Locator

  constructor(page: Page) {
    this.page = page
    this.aVatar = page.locator('//div[@data-element="Avatar"]')
    this.signOutLink = page.locator('text=Sign out')
  }

  async signOut() {
    await this.aVatar.click()
    await this.signOutLink.click()
  }
}

export default HeaderComponent
