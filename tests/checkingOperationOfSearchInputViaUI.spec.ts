import { test } from '@playwright/test';
import { HeaderActions } from '../framework/actions/header-actions.ts';
import { HeaderChecks } from '../framework/checks/header-checks.ts';

test('Checking the operation of the search input via UI', async ({ page }) => {
  const headerActions = new HeaderActions(page);
  const headerChecks = new HeaderChecks(page);
  const searchText = 'npx playwright show-report';


  await page.goto('/');
  await headerActions.clickOnSearchButton();
  await headerChecks.searchModalPopupChecks.isVisible();
  await headerChecks.searchModalPopupChecks.searchInputFilledWithText('');

  await headerActions.searchModalPopupActions.typeInSearchInputViaUI(searchText);
  await headerChecks.searchModalPopupChecks.searchInputFilledWithText(searchText);
  await headerChecks.searchModalPopupChecks.countOfItemsIs(2);
  await headerChecks.searchModalPopupChecks.titleContainText(searchText);
  await headerChecks.searchModalPopupChecks.pathTextIs('CI GitHub Actions');

  await headerActions.searchModalPopupActions.clickOnResetIcon();
  await headerChecks.searchModalPopupChecks.searchInputFilledWithText('');
});