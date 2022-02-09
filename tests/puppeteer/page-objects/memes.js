const { findByXpath, findAllByXpath } = require('../helpers/xpath');

class Memes {
  async visit() {
    await page.goto('http://localhost:3000/memes');
  }

  selectRoot() {
    return page.waitForXPath('.//body');
  }

  selectPagination() {
    return findByXpath(
      this.selectRoot(),
      './/nav[contains(@class, "MuiPagination-root")]'
    );
  }

  selectPaginationButtonByPage(page) {
    return findByXpath(
      this.selectPagination(),
      `.//li//*[contains(@class, "MuiButtonBase-root") and contains(text(), ${page})]`
    );
  }

  selectMemesGrid() {
    return findByXpath(
      this.selectRoot(),
      './/div[contains(@class, "MuiGrid-container")]'
    );
  }

  selectMemes() {
    return findAllByXpath(
      this.selectMemesGrid(),
      './/div[contains(@class, "MuiGrid-item")]'
    );
  }

  clickOnThePaginationButtonByPage(page) {
    return this.selectPaginationButtonByPage(page).then((button) =>
      button.click()
    );
  }
}

module.exports.Memes = Memes;
