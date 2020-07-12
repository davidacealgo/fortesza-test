  
/* eslint-disable no-undef */
'use strict';

const { browser, ExpectedConditions, element } = require("protractor");


let emailPage = function() {

    const inputEmail = element(by.xpath("/html/body/header/div[1]/div/div/div[2]/div/div/input"));
    const emailRow = element(by.xpath("//*[@id='inboxpane']/div/div/div/table/tbody/tr"));
    const emailCode = element(by.xpath("/html/body/table/tbody/tr/td[2]/div/table/tbody/tr[2]/td/table/tbody/tr[3]/td/p[3]/strong"));

    this.openMailinator = async function(url) {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.executeScript(`window.open("${url}")`);
    };

    this.enterToEmail = async function(email) {
        await browser.wait(ExpectedConditions.visibilityOf(inputEmail), 5000);
        await inputEmail.sendKeys(email);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    this.setCode = async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(emailRow), 5000);
        emailRow.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(emailCode), 5000);
        console.log(emailCode);
    }
}

module.exports = new emailPage();