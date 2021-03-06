  
/* eslint-disable no-undef */
'use strict';

const { browser, ExpectedConditions, element } = require("protractor");

let registerPage = function() {
    
    const acceptTermsAndConditions = element(by.xpath("//*[@id='mat-checkbox-1']/label/div"));
    const confirmEmailButton = element(by.className("button-blue"));
    const continueButton = element(by.id("regbtn"));
    const userEmail = element(by.id('email'));
    const userPassword = element(by.id('password'));
    const enterCode = element(by.id("code"));
    const continueRegistration = element(by.className("btn-login"));
    const userCreatedButton = element(by.xpath("//*[@id='InterceptDialog']/intercept-dialog/div[2]/button"))

    this.acceptConditions = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(acceptTermsAndConditions), 5000);
        acceptTermsAndConditions.click();
    }

    this.SendRegistration = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(continueButton), 5000);
        continueButton.click();
    }

    this.codeSent = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(confirmEmailButton), 5000);
        confirmEmailButton.click();
    }

    this.setCredentials = async function(email, password) {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        await userEmail.sendKeys(email);
        await userPassword.sendKeys(password);
    };

    this.sendCode = async function(code) {
        browser.close();
        let windows =  await browser.getAllWindowHandles();
        await browser.switchTo().window(windows[0]);
        await browser.wait(ExpectedConditions.presenceOf(enterCode), 5000);
        console.log(code);
        await enterCode.sendKeys(code);
    }

    this.confirmRegistration = async function(code) {
        await browser.sleep(4000);
        await browser.wait(ExpectedConditions.elementToBeClickable(continueRegistration), 5000);
        continueRegistration.click();
    }

    this.userCreated = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(userCreatedButton), 5000);
        userCreatedButton.click();
    }
};
module.exports = new registerPage();