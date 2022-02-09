describe('Memes page', function () {
  this.tags = ['memes', 'page'];

  before((browser) => {
    browser.maximizeWindow();

    this.memes = browser.page.memes();

    this.memes.navigate();
  });

  it('Memes displayed after opening the page', () => {
    this.memes.checkMemesGridIsPresent();
  });

  it('Pagination page changed', () => {
    const newPage = 2;

    this.memes
      .clickOnThePaginationButtonByPage(newPage)
      .checkMemesGridIsPresent()
      .checkMemesCount(12);
  });

  after((browser) => browser.end());
});
