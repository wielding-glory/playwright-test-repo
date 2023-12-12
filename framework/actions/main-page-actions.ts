import { Page, test } from "@playwright/test";
import { MainPageLocators } from '../locators/main-page-locators.ts';

export class MainPageActions {
    private page: Page;
    public mainPage: MainPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.mainPage = new MainPageLocators(page);
    }

    public async clickOnGetStartedButton() {
        await test.step('Кликнуть на кнопку "Get started"', async () => {
            await this.mainPage.getStartedButton().click();
        });
    }

    public async turnOffLogo() {
        await test.step('Выключить логотип "Playwright"', async () => {
            await this.page.route('img/playwright-logo.svg', route => route.abort());
        });
    }
}