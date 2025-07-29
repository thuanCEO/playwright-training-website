import { Page, Locator, expect } from '@playwright/test';
import { TIMEOUT } from '../config/Constants';
import { ElementAction } from './ElementAction';
import { TemplateXpath, TemplateFormat } from '../helpers/TemplateHelpers'

export class ElementFactory {
    private defaultTimeout = TIMEOUT.DEFAULT;
    // private locator: Locator;

    constructor(private page: Page) { }

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

    // getLocator(target: string, ...args: string[]): ElementAction {
    //     // If args are passed, format the target with placeholders, else use as is
    //     const formatted = args.length > 0
    //         ? TemplateFormat.formatWithPlaceholder(target, ...args)
    //         : target;

    //     // Check if formatted string is XPath or normal selector
    //     const selector = TemplateXpath.isXPath(formatted) ? `xpath=${formatted}` : formatted;

    //     // Return ElementAction with the resolved locator
    //     return new ElementAction(this.page.locator(selector).first());
    // }


}