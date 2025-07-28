import { expect, Page } from '@playwright/test';
import { ShopProductsPage } from '../../locators/TestArchitect/Shop.locator';
import { randomChar } from '../../utils/RandomData';
import { SaveScreenshot } from '../../utils/SaveScreenshot';

export class ShopPage {
  private page: Page;

  public getFilterSelectXPath = () => this.page.locator(ShopProductsPage.filterList.filterSelect);
  public getFilterDataSelectXPath = () => this.page.locator(ShopProductsPage.filterList.filterGroupButton);
  public getTypeSearchInputXPath = () => this.page.locator(ShopProductsPage.menubar.typeSearchInput);
  public getSearchButtonXPath = () => this.page.locator(ShopProductsPage.menubar.searchButton);
  public getProductTitleXPath = () => this.page.locator(ShopProductsPage.productdetails.productTitle);
  public getProductReviewXPath = () => this.page.locator(ShopProductsPage.productdetails.productReviewTab);
  public getProductDescriptionXPath = () => this.page.locator(ShopProductsPage.productdetails.productDescriptionTab);
  public getYourProductRatingXPath = () => this.page.locator(ShopProductsPage.productdetails.yourProductRating);
  public getYourProductReviewXPath = () => this.page.locator(ShopProductsPage.productdetails.yourProductReview);
  public getYourNameReviewXPath = () => this.page.locator(ShopProductsPage.productdetails.yourNameReview);
  public getYourEmailReviewXPath = () => this.page.locator(ShopProductsPage.productdetails.yourEmailReview);
  public getYourSaveReviewXPath = () => this.page.locator(ShopProductsPage.productdetails.yourSaveReview);
  public getYourSubmitReviewXPath = () => this.page.locator(ShopProductsPage.productdetails.yourSubmitReview);


  public getProductNameXPath = () => this.page.locator(ShopProductsPage.productsList.productName);
  public getProductAddToCartButtonXPath = () => this.page.locator(ShopProductsPage.productsList.productAddToCartButton);
  public getProductPriceXPath = () => this.page.locator(ShopProductsPage.productsList.productPrice);
  public getProductAddToCartSuccessMessageXPath = () => this.page.locator(ShopProductsPage.productdetails.productAddToCartSuccessMessage);
  public getProductQuantityXPath = () => this.page.locator(ShopProductsPage.productdetails.productQuantity);
  public getProductSizeXPath = () => this.page.locator(ShopProductsPage.productdetails.productSize);
  public getProductColorXPath = () => this.page.locator(ShopProductsPage.productdetails.productColor);

  constructor(page: Page) {
    this.page = page;
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async chooseFilterSelectGroup(optionText: string): Promise<ShopPage> {
    await this.getFilterSelectXPath().selectOption({ label: optionText });
    return this;
  }

  async fillTypeSearchInput(name: string): Promise<void> {
    await this.getTypeSearchInputXPath().fill(name);
  }

  async clickSearchButton(): Promise<void> {
    await this.getSearchButtonXPath().click();
  }

  async scrollToTypeSearchInputXPath(): Promise<void> {
    await this.getTypeSearchInputXPath().scrollIntoViewIfNeeded();
  }

  async searchTypeProducts(name: string): Promise<ShopPage> {
    await this.scrollToTypeSearchInputXPath();
    await this.fillTypeSearchInput(name);
    await this.clickSearchButton();
    return this;
  }

  async checkProductTitleExists(): Promise<void> {
    const productTitle = this.getProductTitleXPath();
    await expect(productTitle).toBeVisible();
  }

  async checkProductTitleText(expectedText: string): Promise<ShopPage> {
    await this.checkProductTitleExists();
    const actualText = await this.getProductTitleXPath().textContent();
    expect(actualText?.trim()).toBe(expectedText);
    return this;
  }

  async checkProductReviewExists(): Promise<ShopPage> {
    const productReview = this.getProductReviewXPath();
    await expect(productReview).toBeVisible();
    return this;
  }

  async checkProductDescriptionExists(): Promise<ShopPage> {
    const productDescription = this.getProductDescriptionXPath();
    await expect(productDescription).toBeVisible();
    return this;
  }

  async clickProductReviewTab(): Promise<ShopPage> {
    const tab = this.getProductReviewXPath()
    await tab.scrollIntoViewIfNeeded();
    await tab.click();
    return this;
  }

  async clickProductDescriptionTab(): Promise<ShopPage> {
    const tab = this.getProductDescriptionXPath()
    await tab.scrollIntoViewIfNeeded();
    await tab.click();
    return this;
  }

  async clickYourProductRating(): Promise<ShopPage> {
    await this.getYourProductRatingXPath().click();
    return this;
  }

  async fillYourProductReviewInput(name: string): Promise<ShopPage> {
    await this.getYourProductReviewXPath().fill(name);
    return this;
  }

  async fillYourNameReviewInput(name: string): Promise<ShopPage> {
    await this.getYourNameReviewXPath().fill(name);
    return this;
  }

  async fillYourEmailReviewInput(name: string): Promise<ShopPage> {
    await this.getYourEmailReviewXPath().fill(name);
    return this;
  }

  async clickYourSaveReview(): Promise<ShopPage> {
    await this.getYourSaveReviewXPath().click();
    return this;
  }

  async clickYourSubmitReview(): Promise<ShopPage> {
    await this.getYourSubmitReviewXPath().click();
    return this;
  }

  async fillReviewRandomDataInput(): Promise<void> {
    await this.clickProductReviewTab();
    await this.clickYourProductRating();
    await this.fillYourProductReviewInput(randomChar(30));
    // await this.fillYourNameReviewInput(randomChar(10));
    // await this.fillYourEmailReviewInput(`user${Date.now()}@example.com`);
    // await this.clickYourSaveReview();
    await SaveScreenshot(this.page);
    await this.clickYourSubmitReview();
    console.log('Product review form filled with random data', this.fillReviewRandomDataInput.name);
  }

}