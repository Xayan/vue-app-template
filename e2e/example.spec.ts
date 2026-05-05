import { test, expect } from '@playwright/test'

test('homepage has title and basic navigation', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Vue Template | Home')
  await expect(page.getByText('Vue Template')).toBeVisible()
  await expect(page.getByText('Documentation')).toBeVisible()
})

test('shows 404 page for unknown routes', async ({ page }) => {
  await page.goto('/this-page-does-not-exist')

  await expect(page).toHaveTitle('Vue Template | Not Found')
  await expect(page.getByText('404')).toBeVisible()
  await expect(page.getByText('Page not found')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Go Home' })).toBeVisible()

  await page.getByRole('link', { name: 'Go Home' }).click()
  await expect(page).toHaveTitle('Vue Template | Home')
  await expect(page).toHaveURL('/')
})
