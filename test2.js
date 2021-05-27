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

async function testList() {
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
        }, 2000);
      }, 2000);
    }, 3000);
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

// test tab 1 in /profile
async function testProfileTab1() {
  try {
    await driver.get(url + "profile");

    setTimeout(async () => {
      await driver
        .findElement(
          By.xpath("//*[@id='rc-tabs-0-panel-1']/table/tr[2]/th[5]/button")
        )
        .click();
      setTimeout(async () => {
        driver.findElement(
          By.xpath(
            "/html/body/div[3]/div/div[2]/div/div[2]/div/div/div[1]/div/div/div/div/div/div/div/div[2]/input"
          )
        );
        const randomValue = Math.floor(Math.random() * 100);
        await driver
          .findElement(
            By.xpath(
              "/html/body/div[3]/div/div[2]/div/div[2]/div/div/div[1]/div/div/div/div/div/div/div/div[2]/input"
            )
          )
          .sendKeys(randomValue);
        setTimeout(async () => {
          await driver
            .findElement(
              By.xpath(
                "/html/body/div[3]/div/div[2]/div/div[2]/div/div/div[2]/button[2]"
              )
            )
            .click();
        }, 2000);
      }, 5000);
    }, 5000);
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

// test tab 2 in /profile
async function testProfileTab2() {
  try {
    await driver.get(url + "profile");

    await driver.findElement(By.xpath("//*[@id='rc-tabs-0-tab-2']")).click();

    setTimeout(async () => {
      await driver
        .findElement(
          By.xpath("//*[@id='basic']/div[1]/div[2]/div/div/div/div[2]/input")
        )
        .sendKeys(1235);
      setTimeout(async () => {
        await driver
          .findElement(
            By.xpath("//*[@id='basic']/div[2]/div[2]/div/div/div/div[2]/input")
          )
          .sendKeys(101);

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

// test button logout
async function testLogout() {
  try {
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
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

//run all test case
async function testAll() {
  await checkAlert();

  setTimeout(async () => {
    await testList();
    setTimeout(async () => {
      await testProfileTab1();
      setTimeout(async () => {
        await testProfileTab2();
        setTimeout(async () => {
          await testLogout();
        }, 17000);
      }, 15000);
    }, 12000);
  }, 8500);

}

testAll();
