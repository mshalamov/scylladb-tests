import { Page, Locator /* expect */ } from '@playwright/test';

class NavigateComponent {
  page: Page;
  newCluster: Locator;
  dedicatedVM: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newCluster = page.locator('//a[@id="NewClusterNav"]');
    this.dedicatedVM = page.locator('text=Dedicated VM');
  }

  async navigateToDedicatedVm() {
    await this.newCluster.click();
    await this.dedicatedVM.click();
  }
}

export default NavigateComponent;
