import { Page, expect, test } from "@playwright/test";
import { HeaderLocators } from "../locators/header-locators.ts";

export class HeaderChecks {
    public headerLocators: HeaderLocators;

    constructor(page: Page) {
        this.headerLocators = new HeaderLocators(page);
    }

    public async logoIsOff() {
        await test.step('Проверить, что логотип "Playwright" не отображается', async () => {
            await expect(this.headerLocators.logoImg()).toHaveScreenshot();
        });
    }
}