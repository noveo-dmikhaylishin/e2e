module.exports = {
  tags: ['Memes page'],

  before(browser) {
    browser.maximizeWindow();

    const memes = browser.page.memes();

    memes.navigate();
  },

  'Memes fetched after mount': (browser) => {
    const memes = browser.page.memes();

    memes.checkMemesGridIsPresent();
  },

  'Pagination page changed': () => {
    const memes = browser.page.memes();
    const newPage = 2;

    memes
      .clickOnThePaginationButtonByPage(newPage)
      .checkMemesGridIsPresent()
      .checkMemesCount(12);
  },

  after: (browser) => browser.end(),
};
