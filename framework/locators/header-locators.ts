import { Page, Locator } from 'playwright';

export const LINK_NAME_TO_HREF = {
  Docs: '/docs/intro',
  API: '/docs/api/class-playwright',
  Community: '/community/welcome',
};

export type LinkNames = keyof typeof LINK_NAME_TO_HREF;


export class SearchModalPopupLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public popup(): Locator {
    return this.page.locator('//*[@class="DocSearch-Modal"]');
  }

  public searchInput(): Locator {
    return this.popup().locator('//input[@id="docsearch-input"]');
  }

  public resetIcon(): Locator {
    return this.searchInput().locator('//following-sibling::button[@class="DocSearch-Reset"]');
  }

  public listItems(): Locator {
    return this.popup().locator('//li[@class="DocSearch-Hit"]');
  }

  public itemsTitle(): Locator {
    return this.listItems().locator('//*[@class="DocSearch-Hit-title"]');
  }

  public itemsPath(): Locator {
    return this.listItems().locator('//*[@class="DocSearch-Hit-path"]');
  }
}
export class HeaderLocators {
  private page: Page;
  public searchModalPopup: SearchModalPopupLocators;

  constructor(page: Page) {
    this.page = page;
    this.searchModalPopup = new SearchModalPopupLocators(page);
  }

  public header(): Locator {
    return this.page.locator('//nav[contains(@class, "navbar")]');
  }

  public logoImg(): Locator {
    return this.page.locator('//*[@class="navbar__logo"]');
  }

  public links(linkName: LinkNames): Locator {
    return this.header().locator(`//a[@href="${LINK_NAME_TO_HREF[linkName]}"]`);
  }

  public searchButton(): Locator {
    return this.page.locator('//button[starts-with(@class, "DocSearch")]');
  }

}
