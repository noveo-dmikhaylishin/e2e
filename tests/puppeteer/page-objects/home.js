class Home {
  async visit() {
    await page.goto('http://localhost:3000/', { failOnStatusCode: false });

    return this;
  }
}

module.exports.Home = Home;
