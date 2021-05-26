const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  Key = webdriver.Key;

const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().window().maximize();


(async function example() {


  try {
    // Navigate to Url
    await driver.get('https://www.google.com');

    // Enter text "webdriver" and perform keyboard action "Enter"
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.ENTER);

    // Perform action ctrl + A (modifier CONTROL + Alphabet A) to select the page
    // await driver.actions().keyDown(Key.CONTROL).sendKeys('a').perform();
  }
  finally {
    await driver.quit();
  }
})();