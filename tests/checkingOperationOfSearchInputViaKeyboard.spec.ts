import { test } from '@playwright/test';
import { HeaderChecks } from '../framework/checks/header-checks.ts';

test('Checking the operation of the search input via Keyboard', async ({ page }) => {
  const headerChecks = new HeaderChecks(page);
  const searchText = 'npx playwright show-report';


  await page.goto('/');
  await page.waitForTimeout(1000);
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