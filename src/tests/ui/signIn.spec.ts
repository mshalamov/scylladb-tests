import { test, expect } from '../../test.setup'

test.describe('UI Authentication', () => {
  test('Verify sign in', async ({ signInPage, myClustersPage, context }) => {
    context.clearCookies()

    await signInPage.navigate()
    await expect(signInPage.signInTitle).toBeVisible()

    await signInPage.signIn(process.env.EMAIL!, process.env.PASSWORD!)
    await expect(myClustersPage.myClusterTitle).toBeVisible()
  })
})
