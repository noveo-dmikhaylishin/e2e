const { findByXpath } = require('../helpers/xpath');

class SideBar {
  selectRoot() {
    return page.waitForXPath('.//*[contains(@class, "MuiDrawer-root")]');
  }

  selectMenuContentByText(text) {
    return findByXpath(
      this.selectRoot(),
      `.//*[contains(@class, "MuiList-root")]//*[contains(@class, "MuiListItemText-root")]//span[contains(text(), "${text}")]`
    );
  }

  async selectMenuLinkByText(text) {
    return findByXpath(
      this.selectMenuContentByText(text),
      './ancestor::*[contains(@class, "MuiListItem-root")]'
    );
  }

  selectLogo() {
    return findByXpath(this.selectRoot(), './/img');
  }

  clickOnTheLogo() {
    return this.selectLogo().then((logo) => logo.click());
  }

  clickOnTheMenuLinkByText(text) {
    return this.selectMenuLinkByText(text).then((element) => element.click());
  }
}

module.exports.SideBar = SideBar;
