import { Memes } from '../../page-objects/memes';

describe('Memes page', () => {
  const memes = new Memes();

  it('Memes fetched after mount', () => {
    cy.interceptMemes().as('memes');

    memes.visit();

    cy.get('@memes').its('response.statusCode').should('eq', 200);
  });

  it('Pagination page changed', () => {
    const newPage = 2;

    cy.interceptMemes().as('memes');

    memes.clickOnThePaginationButtonByValue(newPage);

    cy.get('@memes').its('response.statusCode').should('eq', 200);
  });
});
