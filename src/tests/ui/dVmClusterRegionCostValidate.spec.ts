import { test } from '../../test.setup'
import { expect } from '@playwright/test'

test.describe('Dedicated VM Region change', () => {
  test('Verify when changing a region, the pricing change', async ({
    myClustersPage,
    newClusterPage,
  }) => {
    await myClustersPage.navigate()
    await expect(myClustersPage.myClusterTitle).toBeVisible()

    await newClusterPage.navigateTo().dedicatedVmPage()
    await expect(newClusterPage.newClusterTitle).toBeVisible()
    const priceDefault = await newClusterPage.totalCostPerHour.textContent()
    await newClusterPage.selectRandomRegion()
    await expect(newClusterPage.totalCostPerHour).toHaveText(
      priceDefault.toString(),
    )
  })
})
