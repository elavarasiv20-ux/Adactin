export class LoginPage{
    constructor(page){
    this.page =page;
    this.username = page.locator('//input[@id="username"]')
    this.password = page.locator('//input[@id="password"]')
    this.submit = page.locator('//input[@id="login"]')

    }
    async Launch(){
      await this.page.goto('https://adactinhotelapp.com/')
    }
    async enterUserName(uname){
      await this.username.fill(uname)
    }
    async enterPassword(pword){
      await this.password.fill(pword)
    }
    async submitButton(){
      await this.submit.click()
    } 
}