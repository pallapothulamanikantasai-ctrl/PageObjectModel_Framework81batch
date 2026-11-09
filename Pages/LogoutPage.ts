// To provide the elements/objects and method of the page
import {BaseClass} from '../Utilities/BaseClass';

export class LogoutPage extends BaseClass {
    static link_Logout : string = "//a[text()='Logout']";
    static async Logout() {
        await this.page.locator(this.link_Logout).click();
        console.log("Logout completed");
    }
}