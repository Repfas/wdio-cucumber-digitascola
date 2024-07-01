class LoginPage {
    get usernameTextbox() { return $('#user-name'); }
    get passwordTextbox() { return $('#password'); }
    get loginButton() { return $('#login-button'); }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameTextbox.setValue(username);
        await this.passwordTextbox.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();
