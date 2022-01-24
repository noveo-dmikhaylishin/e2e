const getMenuElementSelector = (text) =>
  `.//*[contains(@class, "")]//span[contains(text(), "${text}")]`;

const getMenuLinkSelector = (text) =>
  [
    getMenuElementSelector(text),
    `/ancestor::*[contains(@class, "MuiListItem-root")]`,
  ].join('');

const sideBarCommands = {
  checkMenuContentIsPresentByText(text) {
    // eslint-disable-next-line no-unused-expressions
    this.expect.element({
      selector: getMenuElementSelector(text),
      locateStrategy: 'xpath',
    }).to.be.present;

    return this;
  },

  clickOnTheMenuLinkByText(text) {
    return this.click({
      selector: getMenuLinkSelector(text),
      locateStrategy: 'xpath',
    });
  },

  clickOnTheLogo() {
    return this.click('@logo');
  },

  checkWidth(expectedWidth) {
    this.getElementSize('@paper', ({ width }) => {
      this.assert.equal(width, expectedWidth);
    });

    return this;
  },
};

const rootCommands = {
  checkMenuContentIsPresentByText(text) {
    this.section.sideBar.checkMenuContentIsPresentByText(text);

    return this;
  },

  checkWidth(expectedWidth) {
    this.section.sideBar.checkWidth(expectedWidth);

    return this;
  },

  clickOnTheLogo() {
    this.section.sideBar.clickOnTheLogo();

    return this;
  },

  clickOnTheMenuLinkByText(text) {
    this.section.sideBar.clickOnTheMenuLinkByText(text);

    return this;
  },
};

module.exports = {
  commands: [rootCommands],
  sections: {
    sideBar: {
      commands: [sideBarCommands],
      selector: './/*[contains(@class, "MuiDrawer-root")]',
      locateStrategy: 'xpath',
      elements: {
        paper: {
          selector: './/*[contains(@class, "MuiPaper-root")]',
        },
        logo: {
          selector: './/img',
          locateStrategy: 'xpath',
        },
      },
    },
  },
};
