import { Memes } from '../../page-objects/memes';

describe('Memes page', () => {
  const memes = new Memes();

  it('Memes fetched after mount', () => {
    cy.interceptMemes().as('memesRequest');

    memes.visit();

    cy.get('@memesRequest').its('response.statusCode').should('eq', 200);
    cy.get('@memesRequest').its('response.body.data').should('have.length', 12);

    memes.selectMemes().should('have.length', 12);
  });

  it('Pagination page changed', () => {
    const newPage = 2;

    cy.interceptMemes().as('memesRequest');

    memes.clickOnThePaginationButtonByPage(newPage);

    cy.get('@memesRequest').its('response.statusCode').should('eq', 200);
    cy.get('@memesRequest').its('response.body.data').should('have.length', 12);

    memes.selectMemes().should('have.length', 12);
  });
});
