import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Functionality", () => {
  test("should show error for invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    // Perform login
    await loginPage.login("sai@example.com", "saimatkhau");

    // Verify error message
    await loginPage.verifyLoginError("Tài khoản hoặc mật khẩu không đúng");
  });
  test("should login successfully with valid credentials", async ({ page }) => {
    // Verify login form is displayed
    const loginPage = new LoginPage(page);
    await loginPage.verifyLoginFormVisible();

    // Perform login
    await loginPage.login("testuser@example.com", "password123");

    // Verify successful login
    await homePage.verifyWelcomeMessage("testuser");
    await homePage.verifyProductsDisplayed();
  });
});
