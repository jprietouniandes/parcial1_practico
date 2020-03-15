describe('todoist E2E testing', function () {

  before(() => {
    cy.visit('https://todoist.com/')
  });

  it('Login successful', function () {
    login()
  })
  it('addTask successful', function () {
    addTask()
  })
  it('editTask successful', function () {
    editTask()
  })
  it('addsubtask successful', function () {
    addSubTask()
  })
  it('edit subtask successful', function () {
    editSubTask()
  })
  it('delete subtask successful', function () {
    deleteSubTask()
  })
  it('Complete subtask successful', function () {
    completeSubTask()
  })
  /*it('Delete task', function() { 
    deleteTask()
  });*/
  it('Complete task successful', function () {
    completeTask()
  })
  /*cy.wait(2000)
  cy.get(':nth-child(4) > .icon').eq(0).click()
  cy.get('table > tbody > .sel_delete_task > td > .menu_wrapper').eq(0).click({force: true})
  cy.contains('Eliminar').click()*/

})

function login() {
  cy.wait(3000)
  cy.contains('Login').click()
  cy.wait(2000)
  //Lineas nuevas  
  cy.get('#email').click().type("am.espinosa11@uniandes.edu.co")
  cy.wait(2000)
  cy.get('#password').click().type("test123*")
  cy.wait(2000)
  cy.get('button').contains('Log in').click()
}
function addTask() {
  cy.wait(4000)
  cy.get('.agenda_add_task > .action').click()
  cy.get('.DraftEditor-root').click().type("Leer")
  cy.contains('Añadir tarea').click()
}
function editTask() {
  cy.wait(3000)
  cy.get('.task_item_content_text').eq(0).click()
  cy.get('.public-DraftStyleDefault-block').click().clear()
  cy.get('.DraftEditor-root').click().type("Escribir")
  cy.contains('Guardar').click()
}
function addSubTask() {
  cy.wait(2000)
  cy.get('.task_item_actions > .task_info > .form_action_icon').eq(0).click()
  cy.wait(2000)
  cy.get('.plus_add_button').click()
  cy.get('.DraftEditor-root').click().type("Escribir en ingles")
  cy.get('.item_editor_submit').click()
}
function editSubTask() {
  cy.wait(2000)
  cy.get('.task_list_item__content').eq(0).click()
  cy.get('.public-DraftStyleDefault-block').click().clear()
  cy.wait(2000)
  cy.get('.DraftEditor-root').click().type("Escribir en frances")
  cy.wait(2000)
  cy.contains('Guardar').click()
}
function deleteSubTask() {
  cy.wait(2000)
  cy.get('.task_list_item__actions > [data-testid=more_menu]').eq(0).click()
  cy.get('.danger_menu').click()
  cy.wait(2000)
  cy.get('.ist_button_red').click()
}
function completeSubTask() {
  cy.wait(2000)
  cy.get('.task_list_item > .item_checkbox').eq(0).click()
  cy.get('.icon_close').click()
}
function completeTask() {
  cy.wait(2000)
  cy.get('.ist_checkbox').eq(0).click()
}
/*function deleteTask(){
  cy.get('div[id="editor"]').click()
  cy.get('.task_item_details').get('div[class="icon menu gear_menu"]').last().click({force: true})
  cy.get('td[data-track="task|more_delete"]').contains('Eliminar tarea').click()
  cy.screenshot();
  cy.get('.reactist_modal_box__actions').contains('Delete').click({force: true})
  cy.wait(1000)
  cy.get('#editor').not('Task test')
  cy.screenshot();
}*/
