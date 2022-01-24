const topBarCommands = {
  selectTitle() {
    return this.expect.element('@title');
  },

  clickOnTheBurgerButton() {
    this.click('@burgerButton');

    return this;
  },
};

const rootCommands = {
  clickOnTheBurgerButton() {
    this.section.root.clickOnTheBurgerButton();

    return this;
  },
};

module.exports = {
  commands: [rootCommands],
  sections: {
    root: {
      selector: './/*[contains(@class, "MuiAppBar-root")]',
      locateStrategy: 'xpath',
      commands: [topBarCommands],
      elements: {
        burgerButton: {
          selector: './/*[contains(@class, "MuiButtonBase-root")]',
          locateStrategy: 'xpath',
        },
      },
      title: {
        selector: './h6',
        locateStrategy: 'xpath',
        commands: [],
      },
    },
  },
};
