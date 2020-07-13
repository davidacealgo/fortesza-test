  
/* eslint-disable no-undef */
// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
// An example configuration file
exports.config = {

    directConnect: true,

    getPageTimeOut: 20000,
    allScriptsTimeout: 50000,

    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../e2e/features/invalidEmail.feature'
    ],
    coloredLogs: true,

    cucumberOpts: {
        require: [
            '../e2e/steps/commonSteps.js',
            '../e2e/steps/invalidEmailSteps.js'
        ],
        profile: false,
        tags: false,
        format: 'json:./reports/invalidEmail.json'
    },
    seleniumServerStartTimeout: 9000,
    //just maximizing window before testing
    onPrepare: function(){
        browser.waitForAngularEnabled(false);
    } ,
    //Create html report 
    onComplete: () => {
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: './reports/invalidEmail.json',
            output: './reports/invalidEmail.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                'Browser': 'Chrome 83.0.4103.116',
                'Platform': 'Windows',
                'Parallel': 'Scenarios',
                'Executed': 'Remote'
            }
        };
        reporter.generate(options);
    },
    SELENIUM_PROMISE_MANAGER: false
};