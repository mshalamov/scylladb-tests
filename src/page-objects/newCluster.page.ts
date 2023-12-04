import { Page, Locator, expect } from '@playwright/test'
import HeaderComponent from './page-component/header.component'
import NavigateComponent from './page-component/navigationMenu.component'

class NewClusterPage {
  readonly page: Page
  readonly newClusterTitle: Locator
  readonly clusterNameInput: Locator
  readonly clusterNameHelperText: Locator
  readonly nextButton: Locator
  readonly cloudProviderRegion: Locator
  readonly optionList: Locator
  readonly totalCostPerHour: Locator

  constructor(page: Page) {
    this.page = page
    this.newClusterTitle = page.locator(
      '//div[text()[contains(., "New Cluster")]]',
    )
    this.clusterNameInput = page.locator('//input[@id="clusterNameInp"]')
    this.clusterNameHelperText = page.locator(
      '//p[@id="clusterNameInp-helper-text"]',
    )
    this.nextButton = page.locator('//button[@id="launchClusterBtn"]')
    this.cloudProviderRegion = page.locator('//div[@id="cloudProviderRegion"]')
    this.optionList = page.locator('listbox options')
    this.totalCostPerHour = page.locator('//p[@id="totalCostPerHour"]/span')
  }

  async navigate() {
    await this.page.goto('/clusters/new')
  }

  headerComponent() {
    return new HeaderComponent(this.page)
  }

  navigateTo() {
    return new NavigateComponent(this.page)
  }

  async selectRandomRegion() {
    const regionList = [
      'US West (N. California)',
      'US East (Ohio)',
      'US West (Oregon)',
      'Canada (Central)',
      'South America (Sao Paulo)',
      'Asia Pacific (Hong Kong)',
      'Asia Pacific (Mumbai)',
      'Asia Pacific (Osaka)',
      'Asia Pacific (Seoul)',
      'Asia Pacific (Singapore)',
      'Asia Pacific (Sydney)',
      'Asia Pacific (Tokyo)',
      'Europe (London)',
      'Europe (Milan)',
      'Europe (Paris)',
      'EU (Ireland)',
      'EU (Frankfurt)',
      'Europe (Stockholm)',
      'Africa (Cape Town)',
      'Middle East (Bahrain)',
      'Israel (Tel Aviv)',
    ]

    await expect(this.cloudProviderRegion).toBeVisible()
    await this.page.mouse.wheel(0, 150)
    //await this.cloudProviderRegion.scrollIntoViewIfNeeded()
    await this.cloudProviderRegion.click()
    await expect(this.optionList).toHaveCount(28)

    const randomIndex = Math.floor(Math.random() * regionList.length)
    await this.optionList.filter({ hasText: regionList[randomIndex] }).click()
  }
}

export default NewClusterPage
