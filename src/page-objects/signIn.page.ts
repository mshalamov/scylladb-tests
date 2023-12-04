import { Page, Locator } from '@playwright/test'

class SignInPage {
  readonly page: Page
  readonly signInTitle: Locator
  readonly emailInput: Locator
  readonly continueButton: Locator
  readonly passwordInput: Locator
  readonly signInButton: Locator

  constructor(page: Page) {
    this.page = page
    this.signInTitle = page.locator('text=Sign-in')
    this.emailInput = page.locator('//input[@data-test-id="input-identifier"]')
    this.continueButton = page.locator('text=Continue')
    this.passwordInput = page.locator('//input[@data-test-id="input-password"]')
    this.signInButton = page.locator('text=Sign in')
  }

  async navigate() {
    await this.page.goto('/account/login')
  }

  async signIn(email: string, password: string) {
    await this.emailInput.fill(email)
    await this.continueButton.click()
    await this.passwordInput.fill(password)
    await this.signInButton.click()
  }
}

export default SignInPage
