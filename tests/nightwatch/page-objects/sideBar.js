const sideBarCommands = {
  checkMenuContentIsPresentByText(text) {
    const { linkContent } = this.elements;

    // eslint-disable-next-line no-unused-expressions
    this.expect.element({
      selector: linkContent.selector.replace('{text}', text),
      locateStrategy: linkContent.locateStrategy,
    }).to.be.present;

    return this;
  },

  clickOnTheMenuLinkByText(text) {
    const { link } = this.elements;

    return this.click({
      selector: link.selector.replace('{text}', text),
      locateStrategy: link.locateStrategy,
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
        linkContent: {
          selector:
            './/*[contains(@class, "MuiListItemText-root")]//span[contains(text(), "{text}")]',
          locateStrategy: 'xpath',
        },
        link: {
          selector:
            './/*[contains(@class, "MuiListItemText-root")]//span[contains(text(), "{text}")]/ancestor::*[contains(@class, "MuiListItem-root")]',
          locateStrategy: 'xpath',
        },
        paper: {
          selector: './/*[contains(@class, "MuiPaper-root")]',
          locateStrategy: 'xpath',
        },
        logo: {
          selector: './/img',
          locateStrategy: 'xpath',
        },
      },
    },
  },
};
