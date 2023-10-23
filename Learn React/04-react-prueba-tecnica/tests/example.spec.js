// @ts-check
//const { test, expect } = require('@playwright/test');
import { test, expect} from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = "https://cataas.com"
const LOCALHOST_URL = 'http://localhost:5173/'

test('App shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img').nth(0)

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
