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

      Given('I navigate to {string}', async (string)  => {
        await registerPage.get(string);
      });

      Given('I click Register option', async () => {
        await registerPage.clickRegisterButton();
      });

      Given('I am on Register page', async () => {
        await expect(registerPage.isRegisterPage()).to.eventually.equal(true);
      });

      Given('I click Inversionist option', function () {
        registerPage.clickInversionistButton();
      });

      When('I enter {string} and {string}', async (string, string2) => {
        await registerPage.setCredentials(string, string2);
      });

      When('I accept terms and conditions', async () => {
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

      Then('I set email confirmation code', async () => {
        code = await email.setCode();
        console.log(code);
      });

      Then('I enter confirmation code', async () => {
        await registerPage.sendCode(code);
      });

      Then('I click confirm button', async () => {
        await registerPage.confirmRegistration();
      });

      Then('user is created', async () => {
        await registerPage.userCreated();
      });
});