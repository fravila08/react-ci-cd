describe('PokemonCard App Home Page', () => {

  it('displays Pikachu on initial load', () => {
    cy.visit('/')
    cy.get('#welcome').should('have.text', 'Vite + React (CI/CD) Completed')
  });

});