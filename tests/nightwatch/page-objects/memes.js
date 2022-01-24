const getPaginationButtonSelectorByPage = (page) =>
  `.//li//*[contains(@class, "MuiButtonBase-root") and contains(text(), "${page}")]`;

const memesCommands = {
  checkMemesGridIsPresent() {
    // eslint-disable-next-line no-unused-expressions
    this.expect.element('@grid').to.be.present;

    return this;
  },

  checkMemesCount(expectedCount) {
    // eslint-disable-next-line no-unused-expressions
    this.expect.elements('@meme').count.to.equal(expectedCount);

    return this;
  },
};

const paginationCommands = {
  clickOnThePage(page) {
    return this.click({
      selector: getPaginationButtonSelectorByPage(page),
      locateStrategy: 'xpath',
    });
  },
};

const rootCommands = {
  checkMemesGridIsPresent() {
    this.section.memes.checkMemesGridIsPresent();

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
        grid: {
          selector: '.',
          locateStrategy: 'xpath',
        },
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
    },
  },
};
