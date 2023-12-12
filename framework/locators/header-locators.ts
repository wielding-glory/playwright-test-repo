import { Page, Locator } from 'playwright';

export const LINK_NAME_TO_HREF = {
  Docs: '/docs/intro',
  API: '/docs/api/class-playwright',
  Community: '/community/welcome',
};

export type LinkNames = keyof typeof LINK_NAME_TO_HREF;


export class HeaderLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
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

}
