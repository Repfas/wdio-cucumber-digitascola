const LoginPage = require('../../features/Page-objects/loginPage');
const InventoryPage = require('../../features/Page-objects/inventoryPage');

describe('Saucedemo Login test', () => {
    it('successful login', async () => {
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');
        await browser.pause(5000);

        const isInventoryPageDisplayed = await InventoryPage.isInventoryPageDisplayed();
        await expect(isInventoryPageDisplayed).toBe(true);
        await browser.pause(5000);

        await InventoryPage.addItemToCart();
        await browser.pause(5000);

        const isItemInCart = await InventoryPage.isItemInCart();
        await expect(isItemInCart).toContain('1');
        await browser.pause(5000);
    });
});
