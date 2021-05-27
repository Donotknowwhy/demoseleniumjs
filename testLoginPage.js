const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  Key = webdriver.Key;
const { until } = require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().window().maximize();

const url = "https://dbclpm.vercel.app/";
// const url = "http:localhost:3000/";

// empty email & password
async function testLogin() {
  try {
    driver.get(url + "login");

    driver.findElement(By.id("normal_login_email")).sendKeys("");
    driver.findElement(By.id("normal_login_password")).sendKeys("");

    driver.findElement(By.className("login-form-button")).click();

    setTimeout(async () => {
      const a = await driver
        .findElement(By.className("ant-form-item-explain-error"))
        .getText();
      if (typeof a === "string") {
        testLogin1();
      }
      console.log(a);
    }, 5000);
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

// incorrect email & password
async function testLogin1() {
  try {
    driver.get(url + "login");

    driver.findElement(By.id("normal_login_email")).sendKeys("12345@gmail.com");
    driver.findElement(By.id("normal_login_password")).sendKeys("abc888888888");

    driver.findElement(By.className("login-form-button")).click();
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

// correct email & password
async function testLogin2() {
  try {
    driver.get(url + "login");

    driver
      .findElement(By.id("normal_login_email"))
      .sendKeys("abc888@gmail.com");
    driver.findElement(By.id("normal_login_password")).sendKeys("abc888");

    driver.findElement(By.className("login-form-button")).click();
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

// Check javascript alert
async function checkAlert() {
  try {
    await testLogin();
    // Wait for the alert to be displayed
    await driver.wait(until.alertIsPresent());

    // Store the alert in a variable
    let alert = await driver.switchTo().alert();

    //Store the alert text in a variable
    let alertText = await alert.getText();

    //Press the OK button
    setTimeout(async () => {
      await alert.accept();
    }, 2500);

    setTimeout(async () => {
      if (typeof alertText === "string") {
        await testLogin2();
      }
    }, 2500);
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}


checkAlert();