export class Memes {
  async visit() {
    await page.goto('http://localhost:3000/memes');
  }

  selectRoot() {
    return page.waitForXPath('.//body');
  }

  selectPagination() {
    return this.selectRoot()
      .then((root) => root.$x('.//nav[contains(@class, "MuiPagination-root")]'))
      .then(([pagination]) => pagination);
  }

  selectPaginationButtonByValue(value) {
    return this.selectPagination()
      .then((pagination) =>
        pagination.$x(
          `.//li//*[contains(@class, "MuiButtonBase-root") and contains(text(), ${value})]`
        )
      )
      .then(([button]) => button);
  }

  clickOnThePaginationButtonByValue(value) {
    return this.selectPaginationButtonByValue(value).then((button) =>
      button.click()
    );
  }
}
