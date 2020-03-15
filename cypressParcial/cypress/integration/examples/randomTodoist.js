describe('todoist random testing', function() {
  it('Visitar todoist y ejecutar random testing', function() {
      cy.visit('https://todoist.com/')
      cy.wait(3000)
      cy.contains('Login').click()
      cy.wait(2000)
    //Lineas nuevas  
      cy.get('#email').click().type("am.espinosa11@uniandes.edu.co")
      cy.wait(2000)
      cy.get('#password').click().type("test123*")
      cy.wait(2000)
      cy.get('button').contains('Log in').click()
      cy.wait(1000)
      //cy.get('button').contains('¡Comenzar mi nuevo dia!').click()
      //cy.wait(2000)
      //randomTest(15);
  })
})

const events = {
  linkClick:   1,
  textClick:   2,
  buttonClick: 3,
  maxEvents:   4
  //comboClick:  4,
  //maxEvents:	 5
}

function randomTest(monkeysLeft) {

  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  };

  var monkeysLeft = monkeysLeft;
  if(monkeysLeft > 0) {
      var event = getRandomInt( events.linkClick, events.maxEvents);//se elige el evento entre el minimo y el maximo
  cy.log("Evento:" + event)
  
  switch (event) {
    case events.linkClick:
      cy.log("linkClick")
      cy.get('a').then($links => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if(!Cypress.dom.isHidden(randomLink)) {
          cy.log("linkClick_notHidden")
          cy.wrap(randomLink).click({force: true});  
          monkeysLeft = monkeysLeft - 1;                  
        }                  
              cy.wait(500);    
              randomTest(monkeysLeft);                       
      }); 
      break;
    case events.textClick:
      cy.log("textClick")
      cy.get('input').then($inputs => {
        var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
        if(!Cypress.dom.isHidden(randomInput)) {
          cy.log("textClickNotHidden")
          cy.wrap(randomInput).click({force: true}).type("RandomTest", {force: true}); 
          monkeysLeft = monkeysLeft - 1;
        }     
              cy.wait(1000);    
              randomTest(monkeysLeft);           
      });
      break;
    case events.buttonClick:
        cy.log("buttonClick")
      cy.get('button').then($bottons => {
        var randomButton = $bottons.get(getRandomInt(0, $bottons.length));
        if(!Cypress.dom.isHidden(randomButton)) {
          cy.log("buttonClickNotHidden")
          cy.wrap(randomButton).click();   
          monkeysLeft = monkeysLeft - 1;                    
        }       
        cy.wait(500);    
        randomTest(monkeysLeft);            
      });
      break;
    /*case events.comboClick:
      cy.log("comboClick")
      cy.get('select').then($selects => {
        var randomSelect = $selects.get(getRandomInt(0, $selects.length));
        if(!Cypress.dom.isHidden(randomSelect)) {
          cy.log("comboClickNotHidden")
          cy.wrap(randomSelect).select();   
          monkeysLeft = monkeysLeft - 1;                 
        }     
        cy.wait(1000);    
        randomTest(monkeysLeft);          
      });
      break;*/

    default:
      cy.log("evento no existe")
      break;
  } 
 }		
}
