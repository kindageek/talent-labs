describe('Main', () => {
  it('project is running', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('Open button', () => {
  it('should open modal', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').click();
    cy.get('form').should('have.id', 'enroll-student-form');
  });
});

describe('Cancel button', () => {
  it('should close modal', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').click();
    cy.get('form').should('have.id', 'enroll-student-form');
    cy.get('button#cancel-btn').click();
    cy.get('form').should('have.length', 0);
  });
});

describe('Submit button: empty form', () => {
  it('should not submit and close modal', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').click();
    cy.get('form').should('have.id', 'enroll-student-form');
    cy.get('button#submit-btn').click();
    cy.get('form').should('have.length', 1);
  });
});

describe('Copy button', () => {
  it('should copy and change text', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').click();
    cy.get('form').should('have.id', 'enroll-student-form');
    cy.get('button#copy-btn').contains('Copy invited link');
    cy.get('button#copy-btn').click();
    cy.get('button#copy-btn').contains('Copied');
  });
});

describe('Add more batches', () => {
  it('should add more batch select inputs', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').click();
    cy.get('button#batch-select-add-btn').click();
    cy.get('.batch-select-item').should('have.length', 2);
  });
});

describe('Submit form with email', () => {
  it('should submit and alert submitted data', () => {
    cy.visit('http://localhost:3000/');

    let alerted = false;
    cy.on('window:alert', (msg) => (alerted = msg.length > 0));

    cy.get('button').click();

    cy.get('input[name="email"]').type('yolo111@gmail.com');

    cy.get('button#submit-btn')
      .click()
      .then(() => expect(alerted).to.be.true);
  });
});

export {};
