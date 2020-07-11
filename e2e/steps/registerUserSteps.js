/* eslint-disable no-undef */
var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var registerPage = require('../../pages/registerUser');

chai.use(chaiAsPromised);
var expect = chai.expect;
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

      When('I accept terms and conditions', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

      When('I click on continue button', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

      When('appears confirmation email message', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

      When('I click Accept button', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

      When('I enter confirmation code', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

      When('I click confirm button', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

      Then('user is created', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });
});