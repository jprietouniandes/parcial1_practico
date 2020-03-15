Feature: Encontrar 10 errores en ReadReader

  Scenario: Encontar los temas de la aplicación
    Given I wait to see "RedReader"
    When I click on screen 95% from the left and 10% from the top
    When I click on screen 95% from the left and 10% from the top
    And I press "Temas"
    Then I should see "Rojo"
  Scenario: Encontar Subreddits suscritos en página de bienvenida
    Given I wait to see "RedReader"
    And I press "Cerrar"
    Then I should see "Subreddits suscritos"
  Scenario: Verificar funcionamiento del boton cuentas
    Given I wait to see "RedReader"
    When I click on screen 95% from the left and 10% from the top
    And I press "Cuentas"
    Then I should see "Cuentas de Reddit"
  Scenario: Verificar funcionamiento del boton novedades en la funcionalidad de preferencias
    Given I wait to see "RedReader"
    When I click on screen 95% from the left and 10% from the top
    And I press "Preferencias"
    And I press "Acerca de"
    And I press "Novedades"
    Then I should see "Fix"
  Scenario: Verificar funcionamiento del boton de cambio de apariencia en preferencias
      Given I wait to see "RedReader"
      When I click on screen 95% from the left and 10% from the top
      And I press "Preferencias"
      And I press "Apariencia"
      And I click on screen 10% from the left and 35% from the top
      And I press "Verde"
      And I click on screen 10% from the left and 10% from the top
      And I click on screen 10% from the left and 10% from the top
      Then I should see "Página principal"
  Scenario: Verificar funcionamiento del boton que cambia el color de la barra de navegacion
       Given I wait to see "RedReader"
       When I click on screen 95% from the left and 10% from the top
       And I press "Preferencias"
       And I press "Apariencia"
       And I press "Color de la barra de navegación"
       And I press "Primario (claro)"
       And I click on screen 10% from the left and 10% from the top
       And I click on screen 10% from the left and 10% from the top
       Then I should see "Página principal"
  Scenario: Verificar funcionamiento del boton que cambia el idioma de la aplicacion
           Given I wait to see "RedReader"
           When I click on screen 95% from the left and 10% from the top
           And I press "Preferencias"
           And I press "Apariencia"
           And I press "Idioma"
           And I press "English"
           And I click on screen 10% from the left and 10% from the top
           And I click on screen 10% from the left and 10% from the top
           Then I should see "Front Page"
  Scenario: Restablecer aplicación a español
             Given I wait to see "RedReader"
             When I click on screen 95% from the left and 5% from the top
             And I press "Settings"
             And I press "Appearance"
             And I press "Language"
             And I press "Español"
             And I click on screen 10% from the left and 10% from the top
             And I click on screen 10% from the left and 10% from the top
             Then I should see "Página principal"
  Scenario: Verificar funcionamiento del boton que oculta barra de estado de Android
            Given I wait to see "RedReader"
            When I click on screen 95% from the left and 10% from the top
            And I press "Preferencias"
            And I press "Apariencia"
            And I press "Ocultar la barra de estado de Android"
            And I click on screen 10% from the left and 10% from the top
            And I click on screen 10% from the left and 10% from the top
            Then I should see "Página principal"
  Scenario: Restablecer funcionamiento del boton que oculta barra de estado de Android
            Given I wait to see "RedReader"
            When I click on screen 95% from the left and 5% from the top
            And I press "Preferencias"
            And I press "Apariencia"
            And I press "Ocultar la barra de estado de Android"
            And I click on screen 10% from the left and 10% from the top
            And I click on screen 10% from the left and 10% from the top
            Then I should see "Página principal"
  Scenario: Verificar funcionamiento del boton que muestra la barra de herramientas al fondo de la aplicacion y no al inicio como esta por defecto
         Given I wait to see "RedReader"
         When I click on screen 95% from the left and 10% from the top
         And I press "Preferencias"
         And I press "Apariencia"
         And I press "Show Toolbar at Bottom"
         And I click on screen 10% from the left and 10% from the top
         And I click on screen 10% from the left and 10% from the top
         Then I should see "Página principal"

				 
	 




    
