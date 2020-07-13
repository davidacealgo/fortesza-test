/* eslint-disable no-undef */
const {defineSupportCode, setDefaultTimeout} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const email = require('../../pages/email');
const registerPage = require('../../pages/registerUser');

chai.use(chaiAsPromised);
const expect = chai.expect;
let code = "";
setDefaultTimeout(120 * 1000);

defineSupportCode(function({Given, When, Then}) {

      Given('I enter {string} and {string}', async (string, string2) => {
        await registerPage.setCredentials(string, string2);
      });

      Given('I accept terms and conditions', async () => {
        await registerPage.acceptConditions();
      });

      When('I click on continue button', async () => {
        await registerPage.SendRegistration();
      });

      When('appears confirmation email message', async () => {
        await registerPage.codeSent();
      });

      When('I search confirmation code in my {string}', async (string) => {
        await email.enterToEmail(string);
      });

      When('I set email confirmation code', async () => {
        code = await email.setCode();
      });

      When('I enter confirmation code', async () => {
        await registerPage.sendCode(code);
      });

      When('I click confirm button', async () => {
        await registerPage.confirmRegistration();
      });

      Then('user is created', async () => {
        await registerPage.userCreated();
      });
});