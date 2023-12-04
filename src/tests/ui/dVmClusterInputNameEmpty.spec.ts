import { test } from '../../test.setup'
import { expect } from '@playwright/test'

test.describe('Dedicated VM Cluster Name input feild validation', () => {
  test('Veryfy Cluster Name input feild fill empty value', async ({
    myClustersPage,
    newClusterPage,
  }) => {
    await myClustersPage.navigate()
    await expect(myClustersPage.myClusterTitle).toBeVisible()

    await newClusterPage.navigateTo().dedicatedVmPage()
    await expect(newClusterPage.newClusterTitle).toBeVisible()

    await newClusterPage.nextButton.click()
    await expect(newClusterPage.clusterNameHelperText).toBeVisible()
    await expect(newClusterPage.clusterNameHelperText).toHaveText(
      'This field is required',
    )
  })
})
