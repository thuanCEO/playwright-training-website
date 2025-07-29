// src/support/world/PageWorld.ts
import { setWorldConstructor, IWorldOptions, World } from '@cucumber/cucumber';
import { Page } from 'playwright';

export class PageWorld extends World {
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(PageWorld);
