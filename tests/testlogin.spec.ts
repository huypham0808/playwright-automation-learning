import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';


test('has login', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  const txtUsername = page.locator('#user-name');
  const txtPassword = page.locator('#password');
  const btnLogin = page.locator('#login-button');
  // Expect a title "to contain" a substring .fill('standard_user')..fill('secret_sauce')
  await txtUsername.fill('standard_user');
  await txtPassword.fill('secret_sauce');
  await btnLogin.press('Enter');
  await expect(page.locator('span[class="title"]')).toBeVisible;
  //await btnLogin.click(); toc do chậm hơn .press
  await page.waitForTimeout(10000);
});