export class TopBar {
  root() {
    return cy.get('.MuiAppBar-root');
  }

  selectBurgerButton() {
    return this.root().find('.MuiButtonBase-root');
  }

  clickOnTheBurgerButton() {
    return this.selectBurgerButton().click();
  }

  selectTitle() {
    return this.root().find('> h6');
  }
}
