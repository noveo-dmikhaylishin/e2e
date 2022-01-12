import { Memes } from '../../page-objects/memes';
import { interceptMemes } from '../../helpers/interceptors';

describe('Memes page', () => {
  const memes = new Memes();

  it('Memes fetched after mount', async () => {
    await memes.visit();

    const response = await interceptMemes();

    expect(response.status()).toBe(200);
  });

  it('Pagination page changed', async () => {
    const newPage = 2;

    await memes.clickOnThePaginationButtonByValue(newPage);

    const response = await interceptMemes();
    const responseJson = await response.json();

    expect(response.status()).toBe(200);
    expect(responseJson).toHaveProperty('data');
    expect(responseJson.data).toHaveLength(12);
  });
});
