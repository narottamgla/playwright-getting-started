import { type Locator, type Page } from '@playwright/test';

export class HomePageLocator{
    readonly page:Page;
    readonly getStartedButton: Locator;
    readonly pageTitle: RegExp;
    readonly githubLink: Locator;
    readonly profileLnk: Locator;
    readonly homeTopMenus: Locator;

    constructor(page: Page){
        this.page=page;
        this.getStartedButton= page.getByRole("link",{name:'Get Started'});
        this.githubLink = page.locator('a.header-github-link') ;
        this.profileLnk = page.locator('a.header-discord-link');
        this.homeTopMenus = page.locator('css=div>a.nabar_link')
        .filter({hasNot: this.githubLink})
        .filter({hasNot: this.profileLnk});
        this.pageTitle = /Playwright/;
    }
}

export default HomePageLocator;