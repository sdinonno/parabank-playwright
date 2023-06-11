import { Page } from '@playwright/test'

export class Basepage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async goto(path: string) {
        await this.page.goto('https://parabank.parasoft.com/parabank/'.concat(path));
      }
}