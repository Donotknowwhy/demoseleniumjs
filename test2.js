const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  Key = webdriver.Key;

const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().window().maximize();

const url = "https://dbclpm.vercel.app/";
// const url = "http://localhost:3000/";

async function testLogin() {
  try {
    driver.get(url + "login");

    // const arr = [
    //   {
    //     email: 'aaaa',
    //     pass: 'aaaa'
    //   },
    //   {
    //     email: 'aaaa',
    //     pass: 'aaaa'
    //   },
    //   {
    //     email: 'aaaa',
    //     pass: 'aaaa'
    //   }
    // ]

    driver
      .findElement(By.id("normal_login_email"))
      .sendKeys("abc888@gmail.com");
    driver.findElement(By.id("normal_login_password")).sendKeys("abc888");

    driver.findElement(By.className("login-form-button")).click();
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

async function checkAlert() {
  try {
    await driver.get(url + "login");

    // Wait for the alert to be displayed
    await driver.wait(until.alertIsPresent());

    // Store the alert in a variable
    let alert = await driver.switchTo().alert();

    //Store the alert text in a variable
    let alertText = await alert.getText();

    //Press the OK button
    await alert.accept();
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

async function testList() {
  try {
    await testLogin();

    setTimeout(async () => {
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
    }, 10000);

  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

async function testProfile() {
  try {
    // await testLogin();

    setTimeout(async () => {
      await driver.get(url + "profile");

      setTimeout(async () => {
        await driver
          .findElement(
            By.xpath("//*[@id='rc-tabs-0-panel-1']/table/tr[2]/th[5]/button")
          )
          .click();
        setTimeout(async () => {
          const inputValue = await driver
            .findElement(
              By.xpath(
                "/html/body/div[3]/div/div[2]/div/div[2]/div/div/div[1]/div/div/div/div/div/div/div/div[2]/input"
              )
            )
            .getText();
          await driver
            .findElement(
              By.xpath(
                "/html/body/div[3]/div/div[2]/div/div[2]/div/div/div[1]/div/div/div/div/div/div/div/div[2]/input"
              )
            )
            .sendKeys(inputValue, "1124");
          await driver
            .findElement(
              By.xpath(
                "/html/body/div[3]/div/div[2]/div/div[2]/div/div/div[2]/button[2]"
              )
            )
            .click();
        }, 3000);
      }, 5000);
    }, 10000);
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

testList();

testProfile();
