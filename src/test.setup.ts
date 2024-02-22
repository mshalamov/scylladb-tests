import { test as baseTest } from '@playwright/test'
import SignInPage from './page-objects/signIn.page'
import MyClustersPage from './page-objects/myClusters.page'
import NewClusterPage from './page-objects/newCluster.page'

export type TestSetup = {
  signInPage: SignInPage
  myClustersPage: MyClustersPage
  newClusterPage: NewClusterPage
}

export const test = baseTest.extend<TestSetup>({
  page: async ({ page }, use) => {
    await page.request.post(`${process.env.BASE_AUTH_URL}`, {
      data: {
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
        invitationToken: '',
      },
    })
    await use(page)
  },

  signInPage: async ({ page }, use) => {
    await use(new SignInPage(page))
  },

  myClustersPage: async ({ page }, use) => {
    await use(new MyClustersPage(page))
  },

  newClusterPage: async ({ page }, use) => {
    await use(new NewClusterPage(page))
  },
})

export const expect = test.expect
export const describe = test.describe
