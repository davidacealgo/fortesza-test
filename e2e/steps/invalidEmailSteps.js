/* eslint-disable no-undef */
const {defineSupportCode, setDefaultTimeout} = require('cucumber');
const invalidEmailPage = require('../../pages/invalidEmail').default;
const registerPage = require('../../pages/registerUser');

setDefaultTimeout(50 * 1000);

defineSupportCode(function({Given, When, Then}) {

    Given('I enter an ivalid {string} and {string}', async (string, string2) => {
        await registerPage.setCredentials(string, string2);
    });

    Given('I accept terms and conditions of the form', async () => {
        await registerPage.acceptConditions();
    });

    When('I click continue button', async () => {
        await registerPage.SendRegistration();
    });

    Then('appears an error message of invalid email', async () => {
        await invalidEmailPage.errorMessage();
    });
});
