import { test } from '@playwright/test';
import { InstallationPageChecks } from '../framework/checks/installation-page-checks.ts';
import { HeaderActions } from '../framework/actions/header-actions.ts';


test('Checking the opening of the installation page', async ({ page }) => {
const installationPageChecks = new InstallationPageChecks(page);
const headerActions = new HeaderActions(page);

await page.goto('/');
await headerActions.clickOnLink('Docs');
await installationPageChecks.isOpen();
});