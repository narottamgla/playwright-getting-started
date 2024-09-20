import { type Locator, type Page } from '@playwright/test';
import { HomePageLocator } from './homepage.locator';

export class GetStartedPageLocator {
    readonly page: Page;
    readonly getStartedButton: Locator;
    readonly pageTitle: string;

    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.getByRole('link', { name: 'Get Started' });
        this.pageTitle = 'Playwright'
    }

}
export default HomePageLocator;