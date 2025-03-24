import { expect, test } from "@playwright/test";

test.describe("Blog Storage Exercise", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("Cookies: Login sets and verifies session", async ({ page }) => {
    await page.click('button:text("Login (Sets Cookie)")');
    await expect(
      page.locator("text=Session: Admin access granted")
    ).toBeVisible();
    await page.evaluate(() => (document.cookie = "session_id=wrong"));
    await page.reload();
    await expect(page.locator("text=Session: Unauthorized")).toBeVisible();
  });

  test("Local Storage: Saves and displays prefs", async ({ page }) => {
    await expect(page.locator("text=Current: tag:tech")).toBeVisible();
    await page.evaluate(() => localStorage.setItem("prefs", "tag:news"));
    await page.reload();
    await expect(page.locator("text=Current: tag:news")).toBeVisible();
  });

  test("Session Storage: Saves and displays draft", async ({ page }) => {
    await expect(page.locator("text=Draft: My temp draft...")).toBeVisible();
    await page.evaluate(() => sessionStorage.clear());
    await page.reload();
    await expect(page.locator("text=Draft: My temp draft...")).toBeVisible(); // Resets per tab
  });

  test("IndexedDB: Saves and loads drafts", async ({ page }) => {
    await page.click('button:text("Save Draft")');
    await expect(page.locator("li")).toHaveCount(1);
    await page.click('button:text("Save Draft")');
    await expect(page.locator("li")).toHaveCount(2);
    const drafts = await page.locator("li").allTextContents();
    expect(drafts[0]).toMatch(/New draft \d+/);
  });
});
