import { Page, Locator } from '@playwright/test'
import HeaderComponent from './component/header.component'
import NavigateComponent from './component/navigate.component'

class NewClusterPage {
  page: Page
  newClusterTitle: Locator
  clusterNameInput: Locator
  clusterNameHelperText: Locator
  nextButton: Locator
  regionDropdown: Locator

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
    this.regionDropdown = page.locator('//div[@data-testid="region"]')
  }

  async navigate() {
    await this.page.goto('/clusters/new')
  }

  headerComponent() {
    return new HeaderComponent(this.page)
  }

  navigateComponent() {
    return new NavigateComponent(this.page)
  }
}

export default NewClusterPage
