// To provide common reusable methods for the project
import { BaseClass } from './BaseClass';
export class CommonFun {
    static async OpenApplication(url: string) {
        await BaseClass.page.goto(url);
        console.log(`Application opened: ${url}`);
    }
    static async waitstmnt() {
        await BaseClass.page.waitForTimeout(3000);
        console.log("Waited for 3 seconds");
    }
}