export class SideBar {
  root() {
    return cy.get('.MuiDrawer-root');
  }

  selectMenu() {
    return this.root().get('.MuiList-root');
  }

  selectMenuContentByText(text) {
    return this.selectMenu().get('.MuiListItemText-root > span').contains(text);
  }

  selectMenuLinkByText(text) {
    return this.selectMenuContentByText(text).parents('.MuiListItem-root');
  }

  selectLogo() {
    return this.root().find('img');
  }

  clickOnTheLogo() {
    return this.selectLogo().click();
  }

  clickOnTheMenuLinkByText(text) {
    return this.selectMenuLinkByText(text).click();
  }
}
