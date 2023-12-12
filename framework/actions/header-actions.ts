import { Page, test } from "@playwright/test";
import { HeaderLocators, LinkNames, SearchModalPopupLocators } from "../locators/header-locators.ts";

class SearchModalPopupActions {
    private page: Page;
    public searchModalPopupLocators: SearchModalPopupLocators;
  
    constructor(page: Page) {
      this.page = page;
      this.searchModalPopupLocators = new SearchModalPopupLocators(page);
    }
  
    public async typeInSearchInputViaUI(searchText: string) {
        await test.step(`Написать в поле поиска текст: "${searchText}"`, async () => {
            await this.searchModalPopupLocators.searchInput().pressSequentially(searchText);
        });
    }

    public async clickOnResetIcon() {
        await test.step('Кликнуть на иконку "Крестик" в поле поиска', async () => {
            await this.searchModalPopupLocators.resetIcon().click();
        });
    }
  }

export class HeaderActions {
    public headerLocators: HeaderLocators;
    public searchModalPopupActions: SearchModalPopupActions;

    constructor(page: Page) {
        this.headerLocators = new HeaderLocators(page);
        this.searchModalPopupActions = new SearchModalPopupActions(page);
    }

    public async clickOnLink(linkName: LinkNames) {
        await test.step(`Кликнуть на ссылку "${linkName}"`, async () => {
            await this.headerLocators.links(linkName).click();
        });
    }

    public async clickOnSearchButton() {
        await test.step('Кликнуть на кнопку поиска', async () => {
            await this.headerLocators.searchButton().click();
        });
    }
}