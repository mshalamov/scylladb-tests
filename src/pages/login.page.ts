import { Page, Locator } from '@playwright/test';

class LoginPage {
  page: Page;
  signInTitle: Locator;
  emailInput: Locator;
  continueButton: Locator;
  passwordInput: Locator;
  signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInTitle = page.locator('text=Sign-in');
    this.emailInput = page.locator('//input[@name="email"]');
    this.continueButton = page.locator('text=Continue');
    this.passwordInput = page.locator('//input[@name="password"]');
    this.signInButton = page.locator('text=Sign in');
  }

  async navigate() {
    await this.page.goto('/account/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.continueButton.click();
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}

export default LoginPage;
