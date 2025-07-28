import { test, expect } from '@playwright/test';
import { TestArchitectPage } from '../../pages/TestArchitect/ArchitectPages';
import { ShopPage } from '../../pages/TestArchitect/ShopPage';
import { SaveScreenshot } from '../../utils/SaveScreenshot';
import { RegisterAccountTA } from '../../helpers/TestSetup';
import ShopPageTA from '../../data/TestArchitect/ShopPage.json';

let page;
let context;
let shopPagePage: ShopPage;
let testArchitectPage: TestArchitectPage;

test.describe.parallel('@Smoke @ShopProducts', () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await RegisterAccountTA(browser);
        testArchitectPage = new TestArchitectPage(page);
        shopPagePage = new ShopPage(page);
    });

    test.afterAll(async () => {
        await context.close();
    });

    test('View information products and review product', async () => {
        //1. Navigate to the Test Architect page
        await testArchitectPage.clickShopTab();

        //2. Verify the page title
        await (await (await shopPagePage
            .chooseFilterSelectGroup(ShopPageTA.ProductTA.filterSelectGroupName))
            .searchTypeProducts(ShopPageTA.ProductTA.searchProductsName))
            .checkProductTitleText(ShopPageTA.ProductTA.searchProductsName);

        //3. Verify the product title, review, and description and fill the review form
        (await (await shopPagePage
            .clickProductReviewTab())
            .clickProductDescriptionTab())

        await SaveScreenshot(page);
    });

    test('Reviews product - Submit the review & the rating', async () => {
        //1. Navigate to the Test Architect page
        await testArchitectPage.clickShopTab();

        //2. Verify the page title
        await (await (await shopPagePage
            .chooseFilterSelectGroup(ShopPageTA.ProductTA.filterSelectGroupName))
            .searchTypeProducts(ShopPageTA.ProductTA.searchProductsName))
            .checkProductTitleText(ShopPageTA.ProductTA.searchProductsName);

        //3. Verify the product title, review, and description and fill the review form
        (await (await shopPagePage
            .checkProductReviewExists())
            .checkProductDescriptionExists())
            .fillReviewRandomDataInput();

        await SaveScreenshot(page);
    });
});

