const { Memes } = require('../../page-objects/memes');
const { interceptMemes } = require('../../helpers/interceptors');

describe('Memes page', () => {
  const memes = new Memes();

  it('Memes fetched after mount', async () => {
    await memes.visit();

    const response = await interceptMemes();

    expect(response.status()).toBe(200);
  });

  it('Pagination page changed', async () => {
    const newPage = 2;

    await memes.clickOnThePaginationButtonByPage(newPage);

    const response = await interceptMemes();
    const responseJson = await response.json();

    const memesCards = await memes.selectMemes();

    expect(response.status()).toBe(200);
    expect(responseJson.data).toHaveLength(12);
    expect(memesCards).toHaveLength(12);
  });
});
