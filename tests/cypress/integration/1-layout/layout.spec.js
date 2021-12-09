import { SideBar } from '../../page-objects/side-bar';
import { TopBar } from '../../page-objects/top-bar';
import { Home } from '../../page-objects/home';

describe('Application layout', () => {
  const topBar = new TopBar();
  const sideBar = new SideBar();
  const home = new Home();

  beforeEach(() => {
    home.visit();
  });

  it('Open the side bar', () => {
    topBar.clickOnTheBurgerButton();

    sideBar.selectMenuContentByText('Memes').should('be.visible');
    sideBar.root().invoke('width').should('eq', 240);
  });

  it('Click on the memes button in the sidebar redirected to memes', () => {
    sideBar.clickOnTheMenuLinkByText('Memes');

    cy.location('pathname').should('eq', '/memes');
  });

  it('Click on the logo in the sidebar redirected to home', () => {
    topBar.clickOnTheBurgerButton();
    sideBar.clickOnTheLogo();

    cy.location('pathname').should('eq', '/');
  });
});
