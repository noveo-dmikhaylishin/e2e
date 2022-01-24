module.exports = {
  tags: ['Layout'],

  before(browser) {
    browser.maximizeWindow();

    const home = browser.page.home();

    home.navigate();
  },

  'Open the side bar': async (browser) => {
    const sideBar = browser.page.sideBar();
    const topBar = browser.page.topBar();

    sideBar.checkWidth(60);

    topBar.clickOnTheBurgerButton();

    sideBar.checkMenuContentIsPresentByText('Memes').checkWidth(240);
  },

  'Click on the memes button in the sidebar redirected to memes': (browser) => {
    const sideBar = browser.page.sideBar();

    sideBar.clickOnTheMenuLinkByText('Memes');

    browser.expect.url().to.endWith('/memes');
  },

  'Click on the logo in the sidebar redirected to home': async (browser) => {
    const topBar = browser.page.topBar();
    const sideBar = browser.page.sideBar();

    topBar.clickOnTheBurgerButton();
    sideBar.clickOnTheLogo();

    browser.expect.url().to.endWith('/');
  },

  after: (browser) => browser.end(),
};
