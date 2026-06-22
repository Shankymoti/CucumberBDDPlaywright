import { BeforeAll, AfterAll, Before, After,AfterStep, BeforeStep, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import { pageFixture } from "./pagefixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
let browser : Browser;
let page : Page;
let context : BrowserContext;
BeforeAll(async function () {
      getEnv();
      browser = await invokeBrowser();
})

Before(async function ({pickle}) {
  const scenarioName = pickle.name +pickle.id;
    context = await browser.newContext()
     page = await context.newPage()
     pageFixture.page = page
     pageFixture.logger = createLogger(options(scenarioName))

})
AfterStep(async function ({pickle,result}) {
   // if we want to attach ss after every step then we can add below code
//     const img =  await pageFixture.page.screenshot({path : "./test-results/screenshots/"+pickle.name ,type : 'png'})// pickle.name will provide scenario name
//    await this.attach(img, "image/png") 


})
After(async function ({pickle,result}) {
    console.log(result?.status);
  // Screenshot
    if(result?.status == Status.FAILED){
 const img =  await pageFixture.page.screenshot({path : "./test-results/screenshots/"+pickle.name ,type : 'png'})// pickle.name will provide scenario name
   await this.attach(img, "image/png") 
    }
  
  
   await pageFixture.page.close();
    await context.close();
    
})

AfterAll(async function () {
    await browser.close()
     pageFixture.logger.close();
})