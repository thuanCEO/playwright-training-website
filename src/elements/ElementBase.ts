import { Page, Locator } from "@playwright/test";
import { ElementFactory } from '../elements/ElementFactory';

export class ElementBase {
    protected page: Page;
    protected factory: ElementFactory;


    constructor(page: Page) {
        this.page = page;
        this.factory = new ElementFactory(this.page);
    }


}
