import { expect, test } from '@playwright/test';

test('loads the responsive home page and creates project entry', async ({page}) => {
  await page.setViewportSize({width:375,height:812});
  await page.goto('/');
  await expect(page.getByRole('heading',{name:/plan your second home/i})).toBeVisible();
  await page.getByRole('button',{name:/start planning/i}).first().click();
  await expect(page.getByRole('heading',{name:/project details/i})).toBeVisible();
  await expect(page.getByLabel(/project name/i)).toBeVisible();
});
