import { Page, expect, test } from "@playwright/test";
import { InstallationPageLocators } from "../locators/installation-page-locators.ts";

export class InstallationPageChecks {
    private page: Page;
    public installationPageLocators: InstallationPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.installationPageLocators = new InstallationPageLocators(page);
    }

    public async isOpen() {
        await test.step('Проверить, что открыта страница с описанием установки', async () => {
            await expect(this.installationPageLocators.installationTitle()).toBeVisible();
            await expect(this.installationPageLocators.installationTitle()).toHaveText('Installation');
            await expect(this.page).toHaveURL(/intro/);
        });
    }
}