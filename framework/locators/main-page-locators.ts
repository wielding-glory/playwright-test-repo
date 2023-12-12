import { Page, Locator } from 'playwright';

export class MainPageLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public title(): Locator {
    return this.page.locator('//h1[starts-with(@class, "hero__title")]');
  }

  public getStartedButton(): Locator {
    return this.page.locator('//a[starts-with(@class, "getStarted")]');
  }
}