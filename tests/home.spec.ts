import { test, Page } from '@playwright/test';
import  {HomePageAction} from '../actions/homepage.actions';
import {GetStartedPageAction} from '../actions/getstarted.actions'
import baseEnvUrl from '../utils/environmentBaseUrl';


const pageURL="https://playwright.dev/";
let homePageAction : HomePageAction;
let getStartedPageAction : GetStartedPageAction;
const pageUrl = /.*java/;


test.describe('Playwright Website test',()=>{

  test.beforeEach(async({page})=>{
    var currentEnv:any = process.env.CURRENT_ENV;
    console.log(currentEnv);
  //  console.log(baseEnvUrl[currentEnv].home);
    console.log(process.env.DB_HOST);
    await page.goto(pageURL);
    homePageAction= new HomePageAction(page);
    getStartedPageAction = new GetStartedPageAction(page);
    homePageAction.waitForPageUrl(pageUrl);
   // homePageAction.assertPageTitle();

  })

  test('Verify Home page', async ({ page }) => {  
    // Click the get started link.
   // homePageAction.assertHomePage();
   // homePageAction.printAllMenus();
    //homePageAction.assertAllTopMenus();
  });
});