  
/* eslint-disable no-undef */
'use strict';

const { browser, ExpectedConditions } = require("protractor");

var registerPage = function() {
    
    var registerButton =  element(by.className('bigBtnReg mat-button mat-button-base'));
    var inversionistButton = element(by.xpath('//*[@id="ripple"]/button[1]'));
    var userEmail = element(by.id('email'));
    var userPassword = element(by.id('password'));

    this.clickInversionistButton = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(inversionistButton), 5000);
        await inversionistButton.click();
        browser.sleep(5000);
    }

    this.clickRegisterButton = async function() {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        await browser.wait(ExpectedConditions.elementToBeClickable(registerButton), 5000);
        await registerButton.click();
        //await browser.sleep(5000);
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

    this.setCredentials = async function(email, password) {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        await userEmail.sendKeys(email);
        await userPassword.sendKeys(password);
    };
};
module.exports = new registerPage();