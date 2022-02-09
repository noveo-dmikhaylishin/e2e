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

  selectPaginationButtonByPage(page) {
    return this.selectPagination()
      .find('li > .MuiButtonBase-root')
      .contains(page);
  }

  selectMemesGrid() {
    return this.root().find('div.MuiGrid-container');
  }

  selectMemes() {
    return this.selectMemesGrid().find('div.MuiGrid-item');
  }

  clickOnThePaginationButtonByPage(page) {
    return this.selectPaginationButtonByPage(page).click();
  }
}
