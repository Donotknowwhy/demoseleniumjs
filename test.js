const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  Key = webdriver.Key;

const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().window().maximize();


(async function example() {


  try {
    // Navigate to Url
    await driver.get('http://127.0.0.1:5500/index2.html');

    // Enter text "webdriver" and perform keyboard action "Enter"
    // await driver.findElement(By.id('test')).sendKeys(111);
    await driver.executeScript("document.getElementById('test').value=555")

    // Perform action ctrl + A (modifier CONTROL + Alphabet A) to select the page
    // await driver.actions().keyDown(Key.CONTROL).sendKeys('a').perform();
  }
  finally {
  }
})();