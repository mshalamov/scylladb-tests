import { Page, Locator } from '@playwright/test'
import HeaderComponent from './component/header.component'
import NavigateComponent from './component/navigate.component'

class MyClustersPage {
  page: Page
  myClusterTitle: Locator

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

  navigateComponent() {
    return new NavigateComponent(this.page)
  }
}

export default MyClustersPage
