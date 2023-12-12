import { Page, expect, test } from "@playwright/test";
import { HeaderLocators } from "../locators/header-locators.ts";
import { SearchModalPopupLocators } from "../locators/header-locators.ts";

class SearchModalPopupChecks {
    private page: Page;
    public searchModalPopupLocators: SearchModalPopupLocators;

    constructor(page: Page) {
        this.page = page;
        this.searchModalPopupLocators = new SearchModalPopupLocators(page);
    }

    public async isVisible() {
        await test.step('Проверить, что модальное окно поиска есть на странице', async () => {
            await expect(this.searchModalPopupLocators.popup()).toBeVisible();
        });
    }

    public async isHidden() {
        await test.step('Проверить, что модального окна поиска нет на странице', async () => {
            await expect(this.searchModalPopupLocators.popup()).toBeHidden();
        });
    }

    public async searchInputFilledWithText(searchText: string) {
        await test.step(`Проверить, что поле поиска заполнено текстом ${searchText}`, async () => {
            await expect(this.searchModalPopupLocators.searchInput()).toHaveAttribute('value', searchText);
        });
    }

    public async countOfItemsIs(itemsCount: number) {
        await test.step(`Проверить, что количество найденных совпадений в поиске: "${itemsCount}"`, async () => {
            await expect(this.searchModalPopupLocators.listItems()).toHaveCount(itemsCount);
        });
    }

    public async titleContainText(text: string) {
        await test.step(`Проверить, что в заголовках найденных совпадений в поиске содержится текст: "${text}"`, async () => {
            for (const title of await this.searchModalPopupLocators.itemsTitle().all()) {
                await expect(title).toContainText(text);
            }
        });
    }

    public async pathTextIs(pathText: string) {
        await test.step(`Проверить, что в пути найденных совпадений в поиске текст: "${pathText}"`, async () => {
            for (const path of await this.searchModalPopupLocators.itemsPath().all()) {
                await expect(path).toHaveText(pathText);
            }
        });
    }
}

export class HeaderChecks {
    public headerLocators: HeaderLocators;
    public searchModalPopupChecks: SearchModalPopupChecks;

    constructor(page: Page) {
        this.headerLocators = new HeaderLocators(page);
        this.searchModalPopupChecks = new SearchModalPopupChecks(page);
    }

    public async logoIsOff() {
        await test.step('Проверить, что логотип "Playwright" не отображается', async () => {
            await expect(this.headerLocators.logoImg()).toHaveScreenshot();
        });
    }
}