const { Builder, By, Key, util } = require("selenium-webdriver");
var assert = require('assert');

async function login() {
  try{
    //buka browser 
    let driver = await new Builder().forBrowser("chrome").build();
    // buka url google
    await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
    await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
    await driver.findElement(By.name("Submit")).click();

    let getValue = await driver.findElement(By.xpath('//li')).getText();
    assert.equal(getValue, "Welcome Admin","Text Fail");
    console.log(getValue)

  }catch(e){
    console.log("Test Fail")
  }
  
}

login();
