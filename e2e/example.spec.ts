import { test, expect } from '@playwright/test'

test('homepage has title and basic navigation', async ({ page }) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vue Template/)

  // Check if the logo/brand name is visible
  await expect(page.getByText('Vue Template')).toBeVisible()
})
