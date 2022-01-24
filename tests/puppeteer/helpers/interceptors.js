const interceptResponse = (url) =>
  new Promise((resolve) => {
    page.on('response', (interceptedResponse) => {
      if (interceptedResponse.url().includes(url)) {
        resolve(interceptedResponse);
      }
    });
  });

const interceptMemes = () => interceptResponse('/v1/memes/');

module.exports.interceptResponse = interceptResponse;
module.exports.interceptMemes = interceptMemes;
