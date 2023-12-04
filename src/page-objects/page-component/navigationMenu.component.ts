import { Page, Locator } from '@playwright/test'

class NavigationMenuComponent {
  readonly page: Page
  readonly newCluster: Locator
  readonly dedicatedVm: Locator
  readonly serverless: Locator
  readonly myClusters: Locator

  constructor(page: Page) {
    this.page = page
    this.newCluster = page.locator('//a[@id="NewClusterNav"]')
    this.dedicatedVm = page.locator('text=Dedicated VM')
    this.serverless = page.locator('text=Serverless')
    this.myClusters = page.locator('//span[text()[contains(., "My Cluster")]]')
  }

  async dedicatedVmPage() {
    await this.newCluster.click()
    await this.dedicatedVm.click()
  }

  async serverlessPage() {
    await this.newCluster.click()
    await this.serverless.click()
  }

  async myClustersPage() {
    await this.myClusters.click
  }
}

export default NavigationMenuComponent
