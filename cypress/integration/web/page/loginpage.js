import locator from './locator.json'
export default class LoginPage{
    constructor() {
        this.url = "https://testerhome.com/account/sign_in"
    }
    get username(){
        return cy.get(locator.loginpage.username)
    }
    get password(){
        return cy.get(locator.loginpage.password)
    }
    get submit(){
        return cy.get(locator.loginpage.submit)
    }
    visit(){
        cy.visit(this.url)
    }
    login(name,pwd){

        if (name!==""){
            this.username.type(name)
        }
        if(pwd!==""){
            this.password.type(pwd)
        }
        this.submit.click()
    }
}
//1. 对象识别属性，locator.json
//2. 获取cypress可以识别的对象