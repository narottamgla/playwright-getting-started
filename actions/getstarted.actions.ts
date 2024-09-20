import { type Page, expect  } from "@playwright/test";

import { GetStartedPageLocator } from "../locators/getstartedpage.locator";

export class GetStartedPageAction {

    readonly page: Page;
    readonly getStartedPageLocator: GetStartedPageLocator;
    constructor(page: Page){
        this.page = page;
        this.getStartedPageLocator = new GetStartedPageLocator(page);
    }

    async clickGetStartedButton(){
        await this.getStartedPageLocator.getStartedButton.click();
    }

    async assertPageUrl(pageUrl){
        await expect(this.page).toHaveURL(pageUrl);
    }
}

export default GetStartedPageAction;