// To provide the methods related to verification of the page
import {BaseClass} from '../Utilities/BaseClass';
import { expect } from '@playwright/test';

export class VerifyPage extends BaseClass { 
    static async verifyTitle(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
        console.log(`Title verified: ${expectedTitle}`);
    }
}
