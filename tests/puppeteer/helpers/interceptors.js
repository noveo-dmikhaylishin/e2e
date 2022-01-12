export const interceptResponse = (url) =>
  new Promise((resolve) => {
    page.on('response', (interceptedResponse) => {
      if (interceptedResponse.url().includes(url)) {
        resolve(interceptedResponse);
      }
    });
  });

export const interceptMemes = () => interceptResponse('/v1/memes/');
