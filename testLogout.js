const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  Key = webdriver.Key;
const { until } = require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().window().maximize();

const url = "https://dbclpm.vercel.app/";
// const url = "http:localhost:3000/";


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

// test button logout
async function testLogout() {
  try {
    await testLogin2();
    setTimeout( async() => {
        await driver
      .findElement(
        By.xpath(
          "//*[@id='__next']/div/div[1]/section/header/div[2]/div[1]/ul/span"
        )
      )
      .click();
    setTimeout(async () => {
      await driver
        .findElement(By.xpath("/html/body/div[2]/div/div/ul/li[3]/button"))
        .click();
    }, 3500);
    }, 7000);
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}



testLogout()