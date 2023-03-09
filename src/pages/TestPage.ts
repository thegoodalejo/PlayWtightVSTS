import {Page} from '@playwright/test'
export class TestPage{
    readonly page: Page;
    constructor(page: Page){ 

        this.page = page; 
        
        } 
        
        async navigate(){ 
        
            await this.page.goto('https://spsprodcus3.vssps.visualstudio.com/_signin?realm=grupobancolombia.visualstudio.com&reply_to=https%3A%2F%2Fgrupobancolombia.visualstudio.com%2F&redirect=1&hid=b29a340b-0a5e-465f-b6e7-d3d33171fee8&context=eyJodCI6MiwiaGlkIjoiYzNhMDUxM2QtZjA2MS00MjdjLWI2MTEtNDllYzAyMDdiOTdhIiwicXMiOnt9LCJyciI6IiIsInZoIjoiIiwiY3YiOiIiLCJjcyI6IiJ90#ctx=eyJTaWduSW5Db29raWVEb21haW5zIjpbImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbSIsImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbSJdfQ2');
            await this.page.goto('https://login.microsoftonline.com/b5e244bd-c492-495b-8b10-61bfd453e423/oauth2/authorize?client_id=499b84ac-1321-427f-aa17-267ca6975798&site_id=501454&response_mode=form_post&response_type=code+id_token&redirect_uri=https%3A%2F%2Fspsprodcus3.vssps.visualstudio.com%2F_signedin&nonce=17c12f4b-a922-4cfc-87b0-6f7d3b9f61da&state=realm%3Dgrupobancolombia.visualstudio.com%26reply_to%3Dhttps%253A%252F%252Fgrupobancolombia.visualstudio.com%252F%26ht%3D2%26hid%3Db29a340b-0a5e-465f-b6e7-d3d33171fee8%26nonce%3D17c12f4b-a922-4cfc-87b0-6f7d3b9f61da&resource=https%3A%2F%2Fmanagement.core.windows.net%2F&cid=17c12f4b-a922-4cfc-87b0-6f7d3b9f61da&wsucxt=1');
            await this.page.goto('https://login.microsoftonline.com/b5e244bd-c492-495b-8b10-61bfd453e423/oauth2/authorize?client_id=499b84ac-1321-427f-aa17-267ca6975798&site_id=501454&response_mode=form_post&response_type=code+id_token&redirect_uri=https%3A%2F%2Fspsprodcus3.vssps.visualstudio.com%2F_signedin&nonce=17c12f4b-a922-4cfc-87b0-6f7d3b9f61da&state=realm%3Dgrupobancolombia.visualstudio.com%26reply_to%3Dhttps%253A%252F%252Fgrupobancolombia.visualstudio.com%252F%26ht%3D2%26hid%3Db29a340b-0a5e-465f-b6e7-d3d33171fee8%26nonce%3D17c12f4b-a922-4cfc-87b0-6f7d3b9f61da&resource=https%3A%2F%2Fmanagement.core.windows.net%2F&cid=17c12f4b-a922-4cfc-87b0-6f7d3b9f61da&wsucxt=1&sso_reload=true');
            await this.page.getByPlaceholder('usuario_red@bancolombia.com.co').click();
            await this.page.getByPlaceholder('usuario_red@bancolombia.com.co').fill('alorozc@bancolombia.com.co');
            await this.page.getByRole('button', { name: 'Siguiente' }).click();
            await this.page.getByPlaceholder('Contraseña').click();
            await this.page.getByPlaceholder('Contraseña').fill('4b*BwmY6e@c9M&');
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