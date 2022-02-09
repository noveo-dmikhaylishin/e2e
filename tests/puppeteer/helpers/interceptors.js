const interceptResponse = (url) =>
  new Promise((resolve) => {
    page.on('response', (interceptedResponse) => {
      if (interceptedResponse.url().includes(url)) {
        resolve(interceptedResponse);
      }
    });
  });

const interceptRequest = (url) =>
  new Promise((resolve) => {
    page.on('request', (interceptedRequest) => {
      if (interceptedRequest.url().includes(url)) {
        resolve(interceptedRequest);
      }
    });
  });

const interceptMemes = () => interceptResponse('/v1/memes/');

module.exports.interceptRequest = interceptRequest;
module.exports.interceptResponse = interceptResponse;
module.exports.interceptMemes = interceptMemes;
