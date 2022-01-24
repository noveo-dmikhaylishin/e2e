export class Memes {
  visit() {
    cy.visit('/memes', { failOnStatusCode: false });

    return this;
  }

  root() {
    return cy.root();
  }

  selectPagination() {
    return this.root().find('nav.MuiPagination-root');
  }

  selectPaginationButtonByValue(value) {
    return this.selectPagination()
      .find('li > .MuiButtonBase-root')
      .contains(value);
  }

  clickOnThePaginationButtonByValue(value) {
    return this.selectPaginationButtonByValue(value).click();
  }
}
