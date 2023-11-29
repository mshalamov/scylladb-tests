import { test, expect } from '@playwright/test'

import MyClusterPage from '../pages/my-clusters.page'
import NewClusterPage from '../pages/new-cluster.page'

let myClusterPage: MyClusterPage
let newClusterPage: NewClusterPage

test.describe('Input validation', () => {
  test('Cluster name input feild validation positive', async ({ page }) => {
    myClusterPage = new MyClusterPage(page)
    newClusterPage = new NewClusterPage(page)

    await myClusterPage.navigate()
    await expect(myClusterPage.myClusterTitle).toBeVisible()

    await newClusterPage.navigateComponent().navigateToDedicatedVm()
    await expect(newClusterPage.newClusterTitle).toBeVisible()

    await newClusterPage.clusterNameInput.fill('test_cluster#1')
    await expect(newClusterPage.clusterNameHelperText).toHaveCount(0)
  })

  test('Cluster name input feild validation negative', async ({ page }) => {
    myClusterPage = new MyClusterPage(page)
    newClusterPage = new NewClusterPage(page)

    await myClusterPage.navigate()
    await expect(myClusterPage.myClusterTitle).toBeVisible()

    await newClusterPage.navigateComponent().navigateToDedicatedVm()
    await expect(newClusterPage.newClusterTitle).toBeVisible()

    await newClusterPage.clusterNameInput.fill('test_cluster#1@')
    await expect(newClusterPage.clusterNameHelperText).toBeVisible()
    await expect(newClusterPage.clusterNameHelperText).toHaveText(
      'Cluster name should start and end with an alphanumeric character and can contain @ _ & # -',
    )
  })

  test('Cluster empty name input feild validation', async ({ page }) => {
    myClusterPage = new MyClusterPage(page)
    newClusterPage = new NewClusterPage(page)

    await myClusterPage.navigate()
    await expect(myClusterPage.myClusterTitle).toBeVisible()

    await newClusterPage.navigateComponent().navigateToDedicatedVm()
    await expect(newClusterPage.newClusterTitle).toBeVisible()

    await newClusterPage.nextButton.click()
    await expect(newClusterPage.clusterNameHelperText).toBeVisible()
    await expect(newClusterPage.clusterNameHelperText).toHaveText(
      'This field is required',
    )
  })
})
