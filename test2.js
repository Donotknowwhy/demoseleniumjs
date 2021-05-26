const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  Key = webdriver.Key;

const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().window().maximize();

// const url = "https://dbclpm.vercel.app/";
const url = "http://localhost:3000/";

async function testLogin() {
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

// async function checkAlert() {
//   try {
//     await driver.get(url + "login");
//     await driver.findElement(By.className("login-form-button")).click();

//     // Wait for the alert to be displayed
//     await driver.wait(until.alertIsPresent());

//     // Store the alert in a variable
//     let alert = await driver.switchTo().alert();

//     //Store the alert text in a variable
//     let alertText = await alert.getText();

//     //Press the OK button
//     await alert.accept();
//   } catch (err) {
//     console.error("Something went wrong!\n", err.stack, "\n");
//   }
// }


async function testList() {
  try {
    await testLogin()
    
    setTimeout( async() =>{
      await driver.get(url + "list");

    (await driver.findElement(By.id("rc_select_0"))).
    // driver.findElement(By.id("rc_select_2")).sendKeys("Phường Điện Biên").sendKeys(Key.ENTER)
    // await driver.findElement(By.id("rc_select_0")).click();

    await driver.findElement(By.xpath("/html/body/div/div/div/section/section/main/div/div/div/div/span/input[@aria-activedescendant='rc_select_0_list_0']")).click();
    }, 10000)

  } catch (err) {
    console.error("Something went wrong!\n", err.stack, "\n");
  }
}


// switchList();

// checkAlert();
testList();
