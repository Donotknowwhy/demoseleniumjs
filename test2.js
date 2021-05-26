var webdriver = require("selenium-webdriver"),
  By = webdriver.By;

async function basicExample() {
  try {
    var driver = new webdriver.Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();

    await driver.get("https://dbclpm.vercel.app/login");

    // const arrayValue =   [
    //       {
    //           email: 'abc8@gmail.com',
    //           password: '123454'
    //       },
    //       {
    //           email: 'mnop@gmail.com',
    //           password: 'aaaaff'
    //       },
    //       {
    //           email: 'abc888@gmail.com',
    //           password: 'abc888'
    //       }
    //   ]

    //   arrayValue.map((items) =>{
    //     driver
    //       .findElement(By.id("normal_login_email"))
    //       .sendKeys(items.email);
    //     driver.findElement(By.id("normal_login_password")).sendKeys(items.password);
    //     driver.findElement(By.className("login-form-button")).click();
    //   })

    driver
      .findElement(By.id("normal_login_email"))
      .sendKeys("abc888@gmail.com");
    driver.findElement(By.id("normal_login_password")).sendKeys("abc888");

    driver.findElement(By.className("login-form-button")).click();
  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}

basicExample();
