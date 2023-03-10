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

            await this.page.goto('https://grupobancolombia.visualstudio.com/');
            await this.page.waitForTimeout(2000);

            await txtUser.click();
            await txtUser.fill('alorozc@bancolombia.com.co');

            expect(btnNext).toBeVisible();
            await btnNext.click();

            expect(txtPassword).toBeVisible();
            await txtPassword.click();
            await txtPassword.fill('4b*BwmY6e@c9M&');

            expect(btnNext).toBeVisible();
            await btnNext.click();

            await this.page.waitForTimeout(10000);
            expect(this.page.locator("xpath=//input[@class='search-input']")) .toBeVisible();
            
            console.log("asdads");
            await this.page.getByRole('button', { name: 'Iniciar sesión' }).click();
            await this.page.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
            await this.page.goto('https://spsprodcus3.vssps.visualstudio.com/_signedin');
            await this.page.goto('https://grupobancolombia.vssps.visualstudio.com/_signedin?realm=grupobancolombia.visualstudio.com&protocol=&reply_to=https%3A%2F%2Fgrupobancolombia.visualstudio.com%2F');
            await this.page.goto('https://grupobancolombia.visualstudio.com/');
            await this.page.getByRole('link', { name: 'Soporte Ingeniería de TI Soporte Ingeniería de TI' }).click();
            await this.page.getByRole('link', { name: 'Boards', exact: true }).click();
            await this.page.getByPlaceholder('Filter by keyword').click();
            await this.page.getByRole('button', { name: 'Assigned to', exact: true }).click();
            await this.page.locator('[id="__bolt-ms-vss-work-web-boards-hub-link"]').click();
            await this.page.getByRole('link', { name: 'Sprints' }).click();
            await this.page.getByRole('link', { name: 'Soporte Ingenieria de SW - DevExp sprints' }).click();
            await this.page.goto('https://grupobancolombia.visualstudio.com/Soporte%20Ingenier%C3%ADa%20de%20TI/_sprints/taskboard/Soporte%20Ingenieria%20de%20SW%20-%20DevExp');
            await this.page.goto('https://grupobancolombia.visualstudio.com/Soporte%20Ingenier%C3%ADa%20de%20TI/_sprints/taskboard/Soporte%20Ingenieria%20de%20SW%20-%20DevExp/Soporte%20Ingenier%C3%ADa%20de%20TI/Sprint%20161');
            await this.page.getByRole('link', { name: 'Queries' }).click();
            await this.page.getByRole('menuitem', { name: 'New query' }).click();
            await this.page.getByRole('row', { name: 'Insert new filter line Remove this filter line Toggle grouping for filter clause Field* Expand Operator Expand Value for field Work Item Type Expand' }).getByRole('cell', { name: 'Field* Expand' }).getByRole('button', { name: 'Expand' }).click();
            await this.page.getByRole('combobox', { name: 'Value for field Work Item Type' }).click();
            await this.page.getByRole('combobox', { name: 'Value for field Work Item Type' }).click();
            await this.page.getByRole('row', { name: 'Insert new filter line Remove this filter line Toggle grouping for filter clause Field* Expand Operator Expand Value for field Work Item Type Expand' }).getByRole('combobox', { name: 'Operator' }).click();
            await this.page.getByRole('row', { name: 'Insert new filter line Remove this filter line Toggle grouping for filter clause Field* Expand Operator Expand Value for field Work Item Type Expand' }).getByRole('combobox', { name: 'Operator' }).fill('');
            await this.page.locator('html').click();
            await this.page.getByRole('cell', { name: 'Value for field Work Item Type' }).click();
            await this.page.getByRole('combobox', { name: 'Value for field Work Item Type' }).fill('[Any]plan');
        
        } 
}