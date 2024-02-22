import { test, expect } from '../../test.setup'

test.describe('UI Authentication', () => {
  test('Verify sign out', async ({ signInPage, myClustersPage }) => {
    await myClustersPage.navigate()
    await expect(myClustersPage.myClusterTitle).toBeVisible()

    await myClustersPage.headerComponent().signOut()
    await expect(signInPage.signInTitle).toBeVisible()
  })
})
