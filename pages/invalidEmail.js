/* eslint-disable no-undef */
'use strict';

const { browser, ExpectedConditions, element } = require("protractor");

let invalidEmailPage = function() {

    const errorAlert = element(by.xpath("/div/div[2]"));

    this.errorMessage = async function() {
        await browser.sleep(2000);
        await browser.wait(ExpectedConditions.presenceOf(errorAlert), 5000);
        //return errorAlert.isDisplayed();
    }
}

module.exports = new invalidEmailPage();
