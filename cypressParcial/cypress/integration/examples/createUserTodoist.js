const usernameAlreadyTaken = 'Username already taken.';
const passwordCharacters = 'Password must be 8 characters or more.';
const passwordMatch = "Accept terms and conditions";

describe('Todoist - Register', function() {

    /* Pruebas con errores */

    it('Register with an username already taken', ()=> {
        cy.visit('https://todoist.com/Users/showRegister');
        cy.get('#full_name').click().type("Ana Maria Espinosa")
        cy.contains(usernameAlreadyTaken);
    });
    
    it('Register with a password less than 8 characters', ()=> {
        cy.visit('https://todoist.com/Users/showRegister');
        cy.get('#full_name').click().type("David")
        cy.get('#email').click().type("david@correo.com")
        cy.get('#pwd').click().type("12345")
        cy.get('#accept_terms').click()
        cy.wait(2000)
        cy.get('#submit_button').click()
        cy.contains(passwordCharacters);
    });
    
    it("Register without check terms", ()=> {
        cy.get('#full_name').click().type("David")
        cy.get('#email').click().type("david@correo.com")
        cy.get('#pwd').click().type("12345")
        cy.wait(2000)
        cy.get('#submit_button').click()
        cy.contains(passwordMatch);
    });    

    /* Prueba exitosa */

    it('Register successful', function() {
        cy.visit('https://todoist.com/Users/showRegister?success_page=');
        cy.contains('Signup').click()        
        cy.get('#sign_up_form').find('input[id="full_name"]').click().type("Johan")
        cy.get('#sign_up_form').find('input[id="email"]').click().type("test2@test.com")
        cy.get('#sign_up_form').find('input[type="password"]').click().type("12345678")
        cy.get('#sign_up_form').find('input[type="checkbox"]').check()
        cy.get('#sign_up_form').find('#submit_button').click();
    })
})


