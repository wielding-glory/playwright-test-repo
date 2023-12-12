import { Page, test } from "@playwright/test";
import { HeaderLocators, LinkNames } from "../locators/header-locators.ts";

export class HeaderActions {
    public headerLocators: HeaderLocators;

    constructor(page: Page) {
        this.headerLocators = new HeaderLocators(page);
    }

    public async clickOnLink(linkName: LinkNames) {
        await test.step(`Кликнуть на ссылку "${linkName}"`, async () => {
            await this.headerLocators.links(linkName).click();
        });
    }
}