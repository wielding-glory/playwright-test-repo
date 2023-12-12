import { Page, Locator } from 'playwright';

export class InstallationPageLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public installationTitle(): Locator {
    return this.page.locator('//h1');
  }
}