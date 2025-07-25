import { Page, Locator, expect } from '@playwright/test';
import { TIMEOUT } from '../config/constants';
import { ElementAction } from './ElementAction';
import { TemplateXpath, TemplateFormat } from '../helpers/TemplateHelpers'

export class ElementFactory {
    private defaultTimeout = TIMEOUT.DEFAULT;
    private locator: Locator;

    constructor(locator: Locator, private page: Page) {
        this.locator = locator;
        this.page = page;
    }

    getLocator(target: string): ElementAction {
        const selector = TemplateXpath.isXPath(target) ? `xpath=${target}` : target;
        const resolvedLocator = this.page.locator(selector).first();
        return new ElementAction(resolvedLocator);
    }

    getDynamicLocator(target: string, ...args: string[]): ElementAction {
        const formatted = args.length > 0 ? TemplateFormat.formatWithPlaceholder(target, ...args) : target;
        const selector = TemplateXpath.isXPath(formatted) ? `xpath=${formatted}` : formatted;
        return new ElementAction(this.page.locator(selector).first());
    }

}