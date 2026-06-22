//npm i @cucumber/cucumber -D
//npm i ts-node -D
//  npm test  -> To execute playwright

# Playwright (TS binding) + Cucumber (BDD)

Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format. 
TypeScript is a powerful superset of JavaScript that adds optional static typing, making it easier to catch errors before runtime. By combining these two tools, we can create more reliable and maintainable tests.

## Features

1. Awesome report with screenshots, videos & logs
2. Execute tests on multiple environments 
3. Parallel execution
4. Rerun only failed features
5. Retry failed tests on CI
6. Github Actions integrated with downloadable report
7. Page object model

## Sample report
![image](https://github.com/ortoniKC/Playwright_Cucumber_TS/assets/58769833/da2d9f5a-85e7-4695-8ce2-3378b692afc4)


## Project structure

- .github -> yml file to execute the tests in GitHub Actions
- src -> Contains all the features & Typescript code
- test-results -> Contains all the reports related file

## Reports

1. [Mutilple Cucumber Report](https://github.com/WasiqB/multiple-cucumber-html-reporter)
2. Default Cucumber report
3. [Logs](https://www.npmjs.com/package/winston)
4. Screenshots of failure
5. Test videos of failure
6. Trace of failure

## Get Started

### Setup:

1. Clone or download the project
2. Extract and open in the VS-Code
3. `npm i` to install the dependencies
4. `npx playwright install` to install the browsers
5. `npm run test` to execute the tests
6. To run a particular test change  
7. `npm install -D typescript` to install type script
```
  paths: [
            "src/test/features/featurename.feature"
         ] 
```
7. Use tags to run a specific or collection of specs
```
npm run test --TAGS="@test or @add"
```

### Folder structure
0. `src\pages` -> All the page (UI screen)
1. `src\test\features` -> write your features here
2. `src\test\steps` -> Your step definitions goes here
3. `src\hooks\hooks.ts` -> Browser setup and teardown logic
4. `src\hooks\pageFixture.ts` -> Simple way to share the page objects to steps
5. `src\helper\env` -> Multiple environments are handled
6. `src\helper\types` -> To get environment code suggestions
7. `src\helper\report` -> To generate the report
8. `config/cucumber.js` -> One file to do all the magic
9. `package.json` -> Contains all the dependencies
10. `src\helper\auth` -> Storage state (Auth file)
11. `src\helper\util` -> Read test data from json & logger

## Some setting we need to do
1. ctrl+, -> search cucumber and provide featute path and under glue provide steps path
2. Add tsconfig.json
3. Add "requireModule": [
            "ts-node/register"
        ] in cucumber.json -> when we import {given} then it will not throw error
4. vs code command -- ctl+D then click on delect then it will delete all select items

5.  "dryRun": true, in cucumber.json is used to check that feature is mapped with stepsdefination file or not, if not then generate snipped in terminal

6. Add this for reporting "format": [
            "progress-bar",  --- to get run time information in terminal
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json", --  it will create report in json format

        ]

7. refer this for HTML Report with chart
https://github.com/WasiqB/multiple-cucumber-html-reporter    

npm install multiple-cucumber-html-reporter --save-dev

when we have --save-dev then it will be added in dev dependency

8.  to rerun  "rerun:@rerun.txt" in cucumber.json in format
9. to run parallel add   "parallel": 2 in cucumber.json

10




