const { SideBar } = require('../../page-objects/side-bar');
const { TopBar } = require('../../page-objects/top-bar');
const { Home } = require('../../page-objects/home');
const { waitForAnimation } = require('../../helpers/wait-for-animation');
const { getPathname } = require('../../helpers/url');

describe('Application layout', () => {
  const topBar = new TopBar();
  const sideBar = new SideBar();
  const home = new Home();

  beforeEach(async () => {
    await home.visit();
  });

  it('Open the side bar', async () => {
    await topBar.clickOnTheBurgerButton();

    const menuItem = await sideBar.selectMenuContentByText('Memes');

    expect(menuItem).toBeTruthy();

    const sideBarRoot = await sideBar.selectRoot();
    await waitForAnimation(sideBarRoot);
    const { width: sideBarWidth } = await sideBarRoot.boundingBox();

    expect(sideBarWidth).toBe(240);
  });

  it('Click on the memes button in the sidebar redirected to memes', async () => {
    await sideBar.clickOnTheMenuLinkByText('Memes');

    const pathname = await getPathname();

    expect(pathname).toBe('/memes');
  });

  it('Click on the logo in the sidebar redirected to home', async () => {
    await topBar.clickOnTheBurgerButton();
    await sideBar.clickOnTheLogo();

    const pathname = await getPathname();

    expect(pathname).toBe('/');
  });
});
