import { test } from '@playwright/test';
import { HeaderChecks } from '../framework/checks/header-checks.ts';
import { MainPageActions } from '../framework/actions/main-page-actions.ts';

test('Checking the display of the alternative text of the "Playwright" logo', async ({ page }) => {
  const mainPageActions = new MainPageActions(page);
  const headerChecks = new HeaderChecks(page);

  await mainPageActions.turnOffLogo();
  await page.goto('/');
  await headerChecks.logoIsOff();
});
