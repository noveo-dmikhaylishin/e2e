class TopBar {
  selectRoot() {
    return page.waitForXPath('.//*[contains(@class, "MuiAppBar-root")]');
  }

  selectBurgerButton() {
    return this.selectRoot()
      .then((root) => root.$x('.//*[contains(@class, "MuiButtonBase-root")]'))
      .then(([button]) => button);
  }

  async clickOnTheBurgerButton() {
    return this.selectBurgerButton().then((burgerButton) =>
      burgerButton.click()
    );
  }

  selectTitle() {
    return this.selectRoot().then((root) => root.$x('./h6'));
  }
}

module.exports.TopBar = TopBar;
