import {expect, Page} from '@playwright/test'
export class TestPage{
    readonly page: Page;
    constructor(page: Page){ 

        this.page = page; 
        
        } 
        
    async logIn(){ 
        const txtUser = this.page.getByPlaceholder('usuario_red@bancolombia.com.co');
        const txtPassword = this.page.getByPlaceholder('Password');
        const btnNext = this.page.locator("xpath=//input[@id='idSIButton9']")

        const strUser = "a";
        const strPassword = "b";

        let strNumeroHU = "4030739";

        let regex = "^TEST_PLAN_PMO_+([A-Z][a-z0-9]+)+ +SPRINT+ +([0-9]*)";


        const inpSearch = this.page.locator("xpath=//input[@class='search-input']");
        const lblSearchResult = this.page.locator(`xpath=//table[contains(@id,'bolt-instant-search-menu')]//span[contains(@aria-label,'${strNumeroHU}')]`)
        const lblHuTitle = this.page.locator("xpath=//input[@placeholder = 'Enter title']");

        await this.page.goto('https://grupobancolombia.visualstudio.com/');
        await this.page.waitForTimeout(2000);

        await txtUser.click();
        await txtUser.fill(strUser);

        expect(btnNext).toBeVisible();
        await btnNext.click();

        await expect(txtPassword).toBeVisible();
        await txtPassword.click();
        await txtPassword.fill(strPassword);
        await btnNext.click();

        console.log("Expect timeout de Auth");

        await expect(inpSearch).toBeVisible({ timeout: 30000 });
        await inpSearch.fill(strNumeroHU);

        await expect(lblSearchResult).toBeVisible({ timeout: 30000 });
        await lblSearchResult.click();

        await expect(lblHuTitle).toBeVisible({ timeout: 30000 });
        
        const pageText = await lblHuTitle.textContent() + "awddadawd";
        console.log(pageText);
        expect((pageText?.match(regex))).toBeTruthy();
        

    
        } 
}