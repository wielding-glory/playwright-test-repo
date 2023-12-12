import { Page, expect, test } from "@playwright/test";
import { MainPageLocators } from '../locators/main-page-locators.ts';

export class MainPageChecks {
    private page: Page;
    public mainPage: MainPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.mainPage = new MainPageLocators(page);
    }

    public async titleIsVisible() {
        await test.step(
            'Проверить, что заголовок "Playwright enables reliable end-to-end testing for modern web apps." есть на странице',
            async () => {
                await expect(this.mainPage.title()).toBeVisible();
            }
        );
    }
}