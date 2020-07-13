/* eslint-disable no-undef */
const {defineSupportCode, setDefaultTimeout} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const commonPage = require('../../pages/common');

chai.use(chaiAsPromised);
const expect = chai.expect;
setDefaultTimeout(120 * 1000);

defineSupportCode(function({Given}) {

    Given('I navigate to {string}', async (string)  => {
        await commonPage.get(string);
    });

    Given('I click Register option', async () => {
        await commonPage.clickRegisterButton();
    });

    Given('I am on Register page', async () => {
        await expect(commonPage.isRegisterPage()).to.eventually.equal(true);
    });

    Given('I click Inversionist option', function () {
        commonPage.clickInversionistButton();
    });
});