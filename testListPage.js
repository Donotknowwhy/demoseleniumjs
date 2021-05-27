const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  Key = webdriver.Key;
const { until } = require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().window().maximize();

const url = "https://dbclpm.vercel.app/";

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

// test empty field
async function testEmptyField() {
  try {
    await driver.get(url + "list");
    setTimeout(async () => {
      driver.findElement(By.id("rc_select_0")).sendKeys("", Key.ENTER);
      setTimeout(async () => {
        driver.findElement(By.id("rc_select_1")).sendKeys("", Key.ENTER);
        setTimeout(async () => {
          await driver
            .findElement(By.id("rc_select_2"))
            .sendKeys("", Key.ENTER);

          await driver.findElement(By.className("btn-search-list")).click();
        }, 3000);
      }, 2000);
    }, 5000);
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

// test incorrect field
async function testIncorrectField() {
  try {
    await driver.get(url + "list");
    setTimeout(() => {
      driver
        .findElement(By.id("rc_select_0"))
        .sendKeys("Thành phố New York", Key.ENTER);
      setTimeout(async () => {
        driver
          .findElement(By.id("rc_select_1"))
          .sendKeys("Quận Ba Vì", Key.ENTER);
        setTimeout(async () => {
          await driver
            .findElement(By.id("rc_select_2"))
            .sendKeys("Phường Điện Biên Phủ", Key.ENTER);

          await driver.findElement(By.className("btn-search-list")).click();
        }, 3000);
      }, 2000);
    }, 5000);
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

//test correct field
async function testCorrectField() {
  try {
    await driver.get(url + "list");
    setTimeout(() => {
      driver
        .findElement(By.id("rc_select_0"))
        .sendKeys("Thành phố Hà Nội", Key.ENTER);
      setTimeout(() => {
        driver
          .findElement(By.id("rc_select_1"))
          .sendKeys("Quận Ba Đình", Key.ENTER);
        setTimeout(async () => {
          await driver
            .findElement(By.id("rc_select_2"))
            .sendKeys("Phường Điện Biên", Key.ENTER);

          await driver.findElement(By.className("btn-search-list")).click();
        }, 3000);
      }, 2000);
    }, 5000);
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

async function runAll() {
  await testLogin2();

  setTimeout(async () => {
    await testEmptyField();
    setTimeout(async () => {
      await testIncorrectField();
      setTimeout(async () => {
        await testCorrectField();
      }, 14000);
    }, 14000);
  }, 12000);
}

runAll();
