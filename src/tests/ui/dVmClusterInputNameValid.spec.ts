import { test, expect } from '../../test.setup'

test.describe('Dedicated VM Cluster Name input feild validations', () => {
  test('Verify Cluster Name input feild fill valid value', async ({
    myClustersPage,
    newClusterPage,
  }) => {
    await myClustersPage.navigate()
    await expect(myClustersPage.myClusterTitle).toBeVisible()

    await newClusterPage.navigateTo().dedicatedVmPage()
    await expect(newClusterPage.newClusterTitle).toBeVisible()

    await newClusterPage.clusterNameInput.fill('test_cluster#1')
    await expect(newClusterPage.clusterNameHelperText).toHaveCount(0)
  })
})
