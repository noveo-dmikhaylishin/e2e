module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['**/puppeteer/**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
};
