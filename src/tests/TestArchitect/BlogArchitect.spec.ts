import { test, expect } from '@playwright/test';
import { TestArchitectPage } from '../../pages/TestArchitect/ArchitectPages';
import { BlogPage } from '../../pages/TestArchitect/BlogPage';
import { SaveScreenshot } from '../../utils/saveScreenshot';
import { RegisterAccountTA } from '../../helpers/TestSetup';
import BlogData from '../../data/TestArchitect/BlogPage.json';

let page;
let context;
let blogPage: BlogPage;
let testArchitectPage: TestArchitectPage;

test.describe('@Smoke @BlogData', () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await RegisterAccountTA(browser);
        testArchitectPage = new TestArchitectPage(page);
        blogPage = new BlogPage(page);
    });

    test.afterAll(async () => {
        await context.close();
    });

    test('@CheckExistBlog - Check exist blog data', async () => {
        await testArchitectPage.clickBlogTab();
        await blogPage.scrollToBottom();
        await blogPage.checkProtectedTitleText(BlogData.BlogArchitect.protectedTitleText);
        await blogPage.isLastReadMoreVisible();
        await SaveScreenshot(page);
    });

    test('@CheckExistBlogDetail - Check exist blog-details data', async () => {
        await testArchitectPage.clickBlogTab();
        await blogPage.scrollToBottom();
        await blogPage.checkProtectedTitleText(BlogData.BlogArchitect.protectedTitleText);
        await blogPage.checkProtectedButtonExists();
        await blogPage.clickChooseProtectHera();
        await blogPage.checkProtectedTitleDetailsText(BlogData.BlogArchitectDetails.protectedTitleDetailsText);
        await blogPage.checkProtectedDetailsText(BlogData.BlogArchitectDetails.protectedDetailsContent);
        await blogPage.checkEnterButtonExists();
        await blogPage.checkEnterButtonExists();
        await SaveScreenshot(page);
    });
});

