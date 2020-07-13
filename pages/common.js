  
/* eslint-disable no-undef */
'use strict';

const { browser, ExpectedConditions, element } = require("protractor");

var commonPage = function() {
    
    const registerButton =  element(by.className('bigBtnReg mat-button mat-button-base'));
    const inversionistButton = element(by.xpath('//*[@id="ripple"]/button[1]'));

    this.clickInversionistButton = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(inversionistButton), 5000);
        inversionistButton.click();
    }

    this.clickRegisterButton = async function() {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        await browser.wait(ExpectedConditions.elementToBeClickable(registerButton), 5000);
        await registerButton.click();
    }

    this.get = async function(url) {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        await browser.get(url);
    };

    this.isRegisterPage = async function() {
        await browser.wait(ExpectedConditions.visibilityOf(inversionistButton), 8000);
        return inversionistButton.isDisplayed();
    }

};
module.exports = new commonPage();