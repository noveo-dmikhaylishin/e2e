export const waitForAnimation = async (selector) => {
  await page.evaluate(
    (element) =>
      new Promise((resolve) => {
        const handler = () => {
          element.removeEventListener('transitionend', handler);

          resolve();
        };

        element.addEventListener('transitionend', handler);
      }),
    selector
  );

  return selector;
};
