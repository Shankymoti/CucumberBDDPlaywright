import { chromium, firefox, LaunchOptions, webkit } from "@playwright/test"

const options : LaunchOptions ={
headless : false,
//args : ["--start-maximized"]
}
export const invokeBrowser =  () => {
    const browserType = process.env.BROWSER

    switch(browserType){
        case "chrome":
           return chromium.launch(options);
        case "firefox":
           return firefox.launch(options);
         case "wibkit":
            return webkit.launch(options);   
        default:
            throw new Error("Browser not supported! Please check the browser name in env variable")         

    }
}