  
/* eslint-disable no-undef */
'use strict';

const { browser, ExpectedConditions, element } = require("protractor");


let emailPage = function() {

    const goButton = element(by.id("go-to-public"));
    const emailRow = element(by.xpath("//*[@id='inboxpane']/div/div/div/table/tbody/tr/td[3]"));
    const emailCode = element(by.xpath("/html/body/table/tbody/tr/td[2]/div/table/tbody/tr[2]/td/table/tbody/tr[3]/td/p[3]/strong"));
    const iframe = element(by.id("msg_body"))
    const inboxfield = element(by.id("addOverlay"));

    this.enterToEmail = async function(email) {
        browser.executeScript(`window.open("https://www.mailinator.com/v3/index.jsp?zone=public&query=${email}#/#inboxpane")`);;
    }

    this.setCode = async function() {
        let windows =  await browser.getAllWindowHandles();
        await browser.switchTo().window(windows[1]);
        await browser.wait(ExpectedConditions.elementToBeClickable(emailRow), 60000);
        emailRow.click();
        const frame = iframe.getWebElement();
        browser.switchTo().frame(frame);
        await browser.wait(ExpectedConditions.presenceOf(emailCode), 35000);
        const str = emailCode.getText().then((text) => {
            return(text.substring(text.length -4)); 
        });
        return str;
    }
}

module.exports = new emailPage();