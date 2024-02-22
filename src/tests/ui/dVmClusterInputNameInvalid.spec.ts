import { test, expect } from '../../test.setup'

test.describe('Dedicated VM Cluster Name input feild validation', () => {
  test('Verify Cluster Name input feild fill invalid value', async ({
    myClustersPage,
    newClusterPage,
  }) => {
    await myClustersPage.navigate()
    await expect(myClustersPage.myClusterTitle).toBeVisible()

    await newClusterPage.navigateTo().dedicatedVmPage()
    await expect(newClusterPage.newClusterTitle).toBeVisible()

    await newClusterPage.clusterNameInput.fill('test_cluster#1@')
    await expect(newClusterPage.clusterNameHelperText).toBeVisible()
    await expect(newClusterPage.clusterNameHelperText).toHaveText(
      'Cluster name should start and end with an alphanumeric character and can contain @ _ & # -',
    )
  })
})
