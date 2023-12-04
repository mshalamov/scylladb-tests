import { Page, Locator } from '@playwright/test'
import HeaderComponent from './page-component/header.component'
import NavigateComponent from './page-component/navigationMenu.component'

class MyClustersPage {
  readonly page: Page
  readonly myClusterTitle: Locator

  constructor(page: Page) {
    this.page = page
    this.myClusterTitle = page.locator(
      '//div[text()[contains(., "My Cluster")]]',
    )
  }

  async navigate() {
    await this.page.goto('/')
  }

  headerComponent() {
    return new HeaderComponent(this.page)
  }

  navigateTo() {
    return new NavigateComponent(this.page)
  }
}

export default MyClustersPage
