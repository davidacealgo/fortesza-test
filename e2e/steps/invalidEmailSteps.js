/* eslint-disable no-undef */
const {defineSupportCode, setDefaultTimeout} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const invalidEmailPage = require('../../pages/invalidEmail').default;
const registerPage = require('../../pages/registerUser');

chai.use(chaiAsPromised);
const expect = chai.expect;
setDefaultTimeout(120 * 1000);

defineSupportCode(function({Given, When, Then}) {

    Given('I enter an ivalid {string} and {string}', async (string, string2) => {
        registerPage.setCredentials(string, string2);
    });

    Given('I accept terms and conditions', async () => {
        registerPage.acceptConditions();;
    });

    When('I click continue button', async () => {
        registerPage.SendRegistration();
    });

    Then('appears an error message of invalid email', async () => {
        await invalidEmailPage.errorMessage();
    });
});
