import { test, expect } from '@playwright/test';
import { TestPage } from '../src/pages/TestPage';
test(`ExampleGherkingFeature title
Given
When
Then`, async ({ page }) => {
  const testPage = new TestPage(page);
  await testPage.logIn();
});

