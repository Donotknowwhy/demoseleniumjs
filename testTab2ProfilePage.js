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

// test negative number input field
async function testNegative() {
  try {
    await driver.get(url + "profile");

    await driver.findElement(By.xpath("//*[@id='rc-tabs-0-tab-2']")).click();

    setTimeout(async () => {
      await driver
        .findElement(
          By.xpath("//*[@id='basic']/div[1]/div[2]/div/div/div/div[2]/input")
        )
        .sendKeys(-222);
      setTimeout(async () => {
        await driver
          .findElement(
            By.xpath("//*[@id='basic']/div[2]/div[2]/div/div/div/div[2]/input")
          )
          .sendKeys(-222);

        setTimeout(async () => {
          await driver.findElement(By.xpath("//*[@id='basic']/button")).click();
          setTimeout(async () => {
            await driver
              .findElement(
                By.xpath(
                  "/html/body/div[3]/div/div[2]/div/div[2]/div/div/div[2]/button[2]"
                )
              )
              .click();
          }, 3000);
        }, 3500);
      }, 3500);
    }, 3000);
  } catch (error) {
    console.error("Something went wrong!\n", error.stack, "\n");
  }
}
// test empty input field
async function testEmpty() {
  try {
    await driver.get(url + "profile");

    await driver.findElement(By.xpath("//*[@id='rc-tabs-0-tab-2']")).click();

    setTimeout(async () => {
      await driver
        .findElement(
          By.xpath("//*[@id='basic']/div[1]/div[2]/div/div/div/div[2]/input")
        )
        .sendKeys("");
      setTimeout(async () => {
        await driver
          .findElement(
            By.xpath("//*[@id='basic']/div[2]/div[2]/div/div/div/div[2]/input")
          )
          .sendKeys("");

        setTimeout(async () => {
          await driver.findElement(By.xpath("//*[@id='basic']/button")).click();
          setTimeout(async () => {
            await driver
              .findElement(
                By.xpath(
                  "/html/body/div[3]/div/div[2]/div/div[2]/div/div/div[2]/button[2]"
                )
              )
              .click();
          }, 3000);
        }, 3500);
      }, 3500);
    }, 3000);
  } catch (error) {
    console.error("Something went wrong!\n", error.stack, "\n");
  }
}
// test decimal input field
async function testDecimal() {
  try {
    await driver.get(url + "profile");

    await driver.findElement(By.xpath("//*[@id='rc-tabs-0-tab-2']")).click();

    setTimeout(async () => {
      await driver
        .findElement(
          By.xpath("//*[@id='basic']/div[1]/div[2]/div/div/div/div[2]/input")
        )
        .sendKeys(1999.333);
      setTimeout(async () => {
        await driver
          .findElement(
            By.xpath("//*[@id='basic']/div[2]/div[2]/div/div/div/div[2]/input")
          )
          .sendKeys(12.456);

        setTimeout(async () => {
          await driver.findElement(By.xpath("//*[@id='basic']/button")).click();
          setTimeout(async () => {
            await driver
              .findElement(
                By.xpath(
                  "/html/body/div[3]/div/div[2]/div/div[2]/div/div/div[2]/button[2]"
                )
              )
              .click();
          }, 3000);
        }, 3500);
      }, 3500);
    }, 3000);
  } catch (error) {
    console.error("Something went wrong!\n", error.stack, "\n");
  }
}

// test correct input field
async function testCorrect() {
  try {
    await driver.get(url + "profile");

    await driver.findElement(By.xpath("//*[@id='rc-tabs-0-tab-2']")).click();

    setTimeout(async () => {
      await driver
        .findElement(
          By.xpath("//*[@id='basic']/div[1]/div[2]/div/div/div/div[2]/input")
        )
        .sendKeys(1999);
      setTimeout(async () => {
        await driver
          .findElement(
            By.xpath("//*[@id='basic']/div[2]/div[2]/div/div/div/div[2]/input")
          )
          .sendKeys(24);

        setTimeout(async () => {
          await driver.findElement(By.xpath("//*[@id='basic']/button")).click();
          setTimeout(async () => {
            await driver
              .findElement(
                By.xpath(
                  "/html/body/div[3]/div/div[2]/div/div[2]/div/div/div[2]/button[2]"
                )
              )
              .click();
          }, 3000);
        }, 3500);
      }, 3500);
    }, 3000);
  } catch (error) {
    console.error("Something went wrong!\n", error.stack, "\n");
  }
}

async function runAll() {
  await testLogin2();

  setTimeout(async () => {
    await testEmpty();
    setTimeout(async () => {
      await testNegative();
      setTimeout(async () => {
        await testDecimal();
        setTimeout(async () => {
          await testCorrect();
        }, 10000);
      }, 10000);
    }, 10000);
  }, 10000);
}

runAll();
