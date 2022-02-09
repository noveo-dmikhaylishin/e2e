const { findByXpath } = require('../helpers/xpath');

class TopBar {
  selectRoot() {
    return page.waitForXPath('.//*[contains(@class, "MuiAppBar-root")]');
  }

  selectBurgerButton() {
    return findByXpath(
      this.selectRoot(),
      './/*[contains(@class, "MuiButtonBase-root")]'
    );
  }

  async clickOnTheBurgerButton() {
    return this.selectBurgerButton().then((burgerButton) =>
      burgerButton.click()
    );
  }

  selectTitle() {
    return findByXpath(this.selectRoot(), './h6');
  }
}

module.exports.TopBar = TopBar;
