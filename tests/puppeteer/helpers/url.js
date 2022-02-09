const getPathname = () => page.evaluate(() => document.location.pathname);

module.exports.getPathname = getPathname;
