import { test } from '../../test.setup'
import { expect } from '@playwright/test'

test.describe('UI Authentication', () => {
  test('Verify sign out', async ({ signInPage, myClustersPage }) => {
    await myClustersPage.navigate()
    await expect(myClustersPage.myClusterTitle).toBeVisible()

    await myClustersPage.headerComponent().signOut()
    await expect(signInPage.signInTitle).toBeVisible()
  })
})
