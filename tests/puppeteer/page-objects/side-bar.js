class SideBar {
  static menuItemSelector = `.//*[contains(@class, "MuiListItemText-root")]`;

  selectRoot() {
    return page.waitForXPath('.//*[contains(@class, "MuiDrawer-root")]');
  }

  selectMenuContentByText(text) {
    return this.selectRoot()
      .then((root) => root.$x(`.//*[contains(@class, "MuiList-root")]`))
      .then(([menu]) =>
        menu.$x(
          `.//*[contains(@class, "MuiListItemText-root")]//span[contains(text(), "${text}")]`
        )
      )
      .then(([menuItem]) => menuItem);
  }

  async selectMenuLinkByText(text) {
    return this.selectMenuContentByText(text)
      .then((menuContent) =>
        menuContent.$x('./ancestor::*[contains(@class, "MuiListItem-root")]')
      )
      .then(([item]) => item);
  }

  selectLogo() {
    return this.selectRoot()
      .then((root) => root.$x(`.//img`))
      .then(([item]) => item);
  }

  clickOnTheLogo() {
    return this.selectLogo().then((logo) => logo.click());
  }

  clickOnTheMenuLinkByText(text) {
    return this.selectMenuLinkByText(text).then((element) => element.click());
  }
}

module.exports.SideBar = SideBar;
