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
async function testEmpty() {
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
            .sendKeys("");
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


// test negative integer
async function testNegative() {
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
            .sendKeys(-33);
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


// test decimal integer
async function testDecimal() {
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
            .sendKeys(1.44);
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

// test correct field
async function testCorrect() {
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

  async function runAll() {
    await testLogin2();
  
    setTimeout(async () => {
      await testEmpty();
      setTimeout( async() => {
          await testNegative();
          setTimeout( async() => {
            await testDecimal();
            setTimeout(async() => {
                await testCorrect()
            }, 10000);
          }, 10000);
      }, 10000);
        
    }, 10000);
  }
  
  runAll();
  