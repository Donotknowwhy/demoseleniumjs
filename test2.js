const webdriver = require("selenium-webdriver"),
  By = webdriver.By;

const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().window().maximize();


async function testLogin() {
  try {
    await driver.get("https://dbclpm.vercel.app/login");
    driver
      .findElement(By.id("normal_login_email"))
      .sendKeys("abc888@gmail.com");
    driver.findElement(By.id("normal_login_password")).sendKeys("abc888");

    driver.findElement(By.className("login-form-button")).click();
    

  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}


testLogin();
