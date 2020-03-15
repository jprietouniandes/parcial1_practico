const missingUsername = 'CSRF tokens mismatch';
const missingPassword = 'Blank password';

describe('Todoist web login', () => {

    before( () => {
        cy.visit('https://todoist.com/users/showLogin');
    });

    /* Pruebas con errores */

    it('Visits Todoist and login fails', ()=> {
        // Llenar form con datos de login
        cy.get('#email').click().type("cuentafalsa@nada.com")
        cy.get('#password').click().type("password")
        cy.wait(2000)
        cy.get('button').contains('Log in').click()
        cy.get('.error_msg > span').should('be.visible');
        cy.get('.error_msg').first().screenshot('loginGenericError', { padding: 10 });
    });

    it('Complete form without username. Username missing', ()=> {
        // Llenar form con datos de login
        cy.wait(2000)
        cy.get('#email').clear();
        cy.get('#password').click().type('password');
        cy.get('button').contains('Log in').click()
        cy.contains(missingUsername);
        cy.get('body').screenshot('loginUsernameMissing', { padding: 8 })
    });
    
    it('Complete form without password. Password missing', ()=> {
        // Llenar form con datos de login
        cy.wait(2000)
        cy.visit('https://todoist.com/users/showLogin');
        cy.wait(2000)
        cy.get('#password').clear();
        cy.get('#email').click().type('cuentafalsa@nada.com');
        cy.get('button').contains('Log in').click()
        cy.contains(missingPassword);
        cy.get('.error_msg > span').should('be.visible');
        cy.get('.error_msg').first().screenshot('loginGenericError', { padding: 10 });
    });

    //Prueba exitosa 
    it('Complete form and redirect to dashboard', ()=> {
        // Llenar form con datos de login
        cy.wait(2000)
        cy.visit('https://todoist.com/users/showLogin');
        cy.get('#password').clear();
        cy.get('#email').clear();
        cy.get('#email').click().type('am.espinosa11@uniandes.edu.co');
        cy.get('#password').click().type('test123*');
        cy.get('button').contains('Log in').click()
    });
})

