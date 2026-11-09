// To provide the Objects /elements of the page and to provide the methods of the page
import {BaseClass} from '../Utilities/BaseClass';
export class LoginPage extends BaseClass {
    //objects/elements//

 static testbox_loginame : string = "//input[@name='txtUserName']";   
 static testbox_password : string = "//input[@name='txtPassword']";
 static button_login     : string = "//input[@name='Submit']";
 //********methods/functions for login page */
static async login(username: string, password: string) {
    await this.page.locator(this.testbox_loginame).fill(username);
    await this.page.locator(this.testbox_password).fill(password);
    await this.page.locator(this.button_login).click();
    console.log("Login completed");
}
}