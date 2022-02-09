const findAllByXpath = (element, xpath) =>
  typeof element.then === 'function'
    ? element.then((result) => result.$x(xpath))
    : element.$x(xpath);

const findByXpath = (element, xpath) =>
  findAllByXpath(element, xpath).then(([result]) => result);

module.exports.findAllByXpath = findAllByXpath;
module.exports.findByXpath = findByXpath;
