/* eslint-disable no-undef */
const {defineSupportCode, setDefaultTimeout} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const email = require('../../pages/email');
const registerPage = require('../../pages/registerUser');

chai.use(chaiAsPromised);
const expect = chai.expect;
setDefaultTimeout(60 * 1000);

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

      When('I go to {string}', async (string) => {
        await email.openMailinator(string);
      });

      When('I search confirmation code in my {string}', async (string) => {
        await email.enterToEmail(string);
      });

      Then('I set email confirmation code', async () => {
        await email.setCode();
      });

      Then('I click Accept button', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

      Then('I enter confirmation code', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

      Then('I click confirm button', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

      Then('user is created', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });
});