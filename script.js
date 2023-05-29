document.addEventListener('DOMContentLoaded', function() {
  const statusElement = document.getElementById('status');
  const enterBtn = document.getElementById('enterBtn');

  enterBtn.addEventListener('click', function() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Entered Metaverse';
    statusElement.parentNode.replaceChild(h1, statusElement);
  });
});
describe('Metaverse Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('updates status text on button click', () => {
    cy.get('#status').should('have.text', 'Enter the Metaverse');
    cy.get('#enterBtn').click();
    cy.get('#status').should('not.exist');
  });

  it('updates status text to heading on button click', () => {
    cy.get('#enterBtn').click();
    cy.get('h1').should('have.text', 'Entered Metaverse');
  });
});
