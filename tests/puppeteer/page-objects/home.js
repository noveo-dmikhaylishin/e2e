class Home {
  async visit() {
    await page.goto('http://localhost:3000/');

    return this;
  }
}

module.exports.Home = Home;
