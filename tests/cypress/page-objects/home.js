export class Home {
  visit() {
    cy.visit('/', { failOnStatusCode: false });

    return this;
  }
}
