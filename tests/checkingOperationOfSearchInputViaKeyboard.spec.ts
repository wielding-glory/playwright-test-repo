import { test } from '@playwright/test';
import { HeaderChecks } from '../framework/checks/header-checks.ts';

test('Checking the operation of the search input via Keyboard', async ({ page }) => {
  const headerChecks = new HeaderChecks(page);
  const searchText = 'npx playwright show-report';


  await page.goto('/');
  await page.waitForTimeout(1000);
  /*
  The playwright does not allow you to immediately press the keyboard shortcut "Control+K", so you need to wait.
  Explicit waits waitForLoadState('domcontentloaded') and waitForLoadState('load') do not help.
  waitForLoad State('networkidle') helps, but is not recommended by Playwright.
  So a one-second wait is used in this place as a workaround.
  */
  await page.keyboard.press('Control+K');
  await headerChecks.searchModalPopupChecks.isVisible();
  await headerChecks.searchModalPopupChecks.searchInputFilledWithText('');

  await page.keyboard.type(searchText);
  await headerChecks.searchModalPopupChecks.searchInputFilledWithText(searchText);
  await headerChecks.searchModalPopupChecks.countOfItemsIs(2);
  await headerChecks.searchModalPopupChecks.titleContainText(searchText);
  await headerChecks.searchModalPopupChecks.pathTextIs('CI GitHub Actions');

  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await headerChecks.searchModalPopupChecks.searchInputFilledWithText('');

  await page.keyboard.press('Escape');
  await headerChecks.searchModalPopupChecks.isHidden();
});