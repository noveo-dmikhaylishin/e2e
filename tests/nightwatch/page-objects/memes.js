const memesCommands = {
  checkMemesCount(expectedCount) {
    this.expect.elements('@meme').count.to.equal(expectedCount);

    return this;
  },
};

const paginationCommands = {
  clickOnThePage(page) {
    const { button } = this.elements;

    return this.click({
      selector: button.selector.replace('{page}', page),
      locateStrategy: button.locateStrategy,
    });
  },
};

const rootCommands = {
  checkMemesGridIsPresent() {
    // eslint-disable-next-line no-unused-expressions
    this.expect.section('@memes').to.be.present;

    return this;
  },

  checkMemesCount(expectedCount) {
    this.section.memes.checkMemesCount(expectedCount);

    return this;
  },

  clickOnThePaginationButtonByPage(page) {
    this.section.pagination.clickOnThePage(page);

    return this;
  },
};

module.exports = {
  url: 'http://localhost:3000/memes',
  commands: [rootCommands],
  sections: {
    memes: {
      selector: './/div[contains(@class, "MuiGrid-container")]',
      locateStrategy: 'xpath',
      commands: [memesCommands],
      elements: {
        meme: {
          selector: './/div[contains(@class, "MuiGrid-item")]',
          locateStrategy: 'xpath',
        },
      },
    },
    pagination: {
      selector: './/nav[contains(@class, "MuiPagination-root")]',
      locateStrategy: 'xpath',
      commands: [paginationCommands],
      elements: {
        button: {
          selector: `.//li//*[contains(@class, "MuiButtonBase-root") and contains(text(), "{page}")]`,
          locateStrategy: 'xpath',
        },
      },
    },
  },
};
