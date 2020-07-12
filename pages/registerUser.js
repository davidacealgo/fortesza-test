  
/* eslint-disable no-undef */
'use strict';

const { browser, ExpectedConditions, element } = require("protractor");

var registerPage = function() {
    
    const acceptTermsAndConditions = element(by.xpath("//*[@id='mat-checkbox-1']/label/div"));
    const confirmEmailButton = element(by.className("button-blue"));
    const continueButton = element(by.id("regbtn"));
    const registerButton =  element(by.className('bigBtnReg mat-button mat-button-base'));
    const inversionistButton = element(by.xpath('//*[@id="ripple"]/button[1]'));
    const userEmail = element(by.id('email'));
    const userPassword = element(by.id('password'));

    this.acceptConditions = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(acceptTermsAndConditions), 5000);
        acceptTermsAndConditions.click();
        //return await acceptTermsAndConditions.getAttribute("aria-checked");
        await browser.sleep(6000);
    }

    this.SendRegistration = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(continueButton), 5000);
        continueButton.click();
    }

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

    this.codeSent = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(confirmEmailButton), 5000);
        confirmEmailButton.click();
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