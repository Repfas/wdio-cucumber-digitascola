class InventoryPage {
    get inventoryList() { return $('.inventory_list'); }
    get addToCartButton() { return $('#add-to-cart-sauce-labs-backpack'); }
    get shoppingCartBadge() { return $('.shopping_cart_badge'); }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async isInventoryPageDisplayed() {
        return await this.inventoryList.isDisplayed();
    }

    async isItemInCart() {
        return await this.shoppingCartBadge.getText();
    }
}

module.exports = new InventoryPage();
