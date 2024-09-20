import { Page, expect } from '@playwright/test'

import { HomePageLocator } from '../locators/homepage.locator'

export class HomePageAction {
    readonly page: Page;
    readonly homePageLocator: HomePageLocator;

    constructor(page: Page) {
        this.page = page;
        this.homePageLocator = new HomePageLocator(page);
    }

    async waitForPageUrl(pageUrl:any){
        await this.page.waitForURL(pageUrl);
    }

    async assertHomePage() {
        await expect(this.homePageLocator.getStartedButton).toBeVisible();
    }

    async assertPageTitle() {
        await this.page.waitForLoadState();
        console.log(await this.page.title())
        await expect(this.page).toHaveTitle(this.homePageLocator.pageTitle);
    }

    async printAllMenus() {
        for (const menus of await this.homePageLocator.homeTopMenus.all()) {
            console.log(await menus.textContent())

        }
    }

    async assertAllTopMenus(){
        await expect(this.homePageLocator.homeTopMenus).toHaveCount(6);
        await expect(this.homePageLocator.homeTopMenus).toHaveText(['Docs','API','Node.js','Community','','']);
        //validate screenshot as well
        await expect(this.page).toHaveScreenshot();
    }
}

export default HomePageAction;