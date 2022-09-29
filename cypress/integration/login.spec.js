//Teste END2END - Caminho Feliz de Login

it('Deve logar com sucesso', function () {
    cy.visit('https://app.acordocerto.de/')

    //Visualizar container de login
    cy.get('#loginForm')
        .should('be.visible')

    //Visualizar ícone de Ajuda
    cy.get('i[class="icon-help"]')
        .should('be.visible')

    //Visualizar logo Acordo Certo
    cy.get('img[alt="Logo site Acordo Certo"]')
        .should('be.visible')

    //Conferência de título da aba do navegador   
    cy.title()
        .should('eq', 'Login - Acordo Certo')

    //Inclusão de CPF cadastrado
    cy.get('#loginForm')
        .type('03240244012')
    cy.get('#loginForm')
        .click(243, 363)

    //Conferência de título da aba do navegador    
    cy.title()
        .should('eq', 'Login - Acordo Certo')

    //Inclusão de senha de usuário
    cy.get('#loginForm')
        .should('be.visible')
    cy.get('div.container-system:nth-child(2) div.row div.col-sm-12.col-md-12 form.ng-invalid.ng-dirty.ng-touched div.slide.active:nth-child(3) div.container-system div.row div.col-sm-12.col-md-12 div.form-group div.input-holder.showpass ac-input-digits.ng-untouched.ng-pristine.ng-invalid div.ac-input-digits div.ac-input-digits-container code-input:nth-child(1) span.code-hidden.empty:nth-child(1) > input:nth-child(1)')
        .type('159978')

    //Click sobre o Mostrar Senha
    cy.get('div.container-system:nth-child(2) div.row div.col-sm-12.col-md-12 form.ng-invalid.ng-dirty.ng-touched div.slide.active:nth-child(3) div.container-system div.row div.col-sm-12.col-md-12 div.form-group div.input-holder.showpass ac-input-digits.ng-untouched.ng-pristine.ng-valid div.ac-input-digits div.ac-input-checkbox-container > ac-input-checkbox:nth-child(1)')
        .click()
    cy.get('#loginForm')
        .click(243, 373)
    //.should('be.checked')

    //Conferência de título da aba do navegador
    cy.title()
        .should('eq', 'Negociar Dívidas Online | Acordo Certo')

    //Saudação 001 deve ser apresentada
    cy.get('app-dashboard:nth-child(2) div.dashboard.background-color-light.padding-header.height-100:nth-child(2) section:nth-child(1) div.container-page > span:nth-child(1)')
        .should('have.text', ' Olá, Gabriel')

    //Saudação 002 deve ser apresentada
    cy.get('div.dashboard.background-color-light.padding-header.height-100:nth-child(2) section:nth-child(2) div.container-page div.debts-text.-m-bottom-3 > h4:nth-child(1)')
        .should('have.text', 'Encontramos 1 empresa')

    //Saudação 003 deve ser apresentada
    cy.get('div.dashboard.background-color-light.padding-header.height-100:nth-child(2) section:nth-child(2) div.container-page div.debts-text.-m-bottom-3 > h5:nth-child(2)')
        .should('have.text', 'Para você negociar!')

    //Apresentação de card para nova negociação Acordo Certo  
    cy.get('div[class="card"]')
        .should('be.visible')

    //Apresentação de logo Acordo Certo    
    cy.get('img[class="img-score-logo"]')
        .should('be.visible')

    //Apresentação de menu seguindo scroll        
    cy.get('div[class="debts-header"]')
        .should('be.visible')

    //Apresentação de card de Score
    cy.get('div[class="holder-informations c-score-info"]')
        .should('be.visible')

    //Apresentação de proposta de solicitação de crédito 
    cy.get('div[class="offer-item"]')
        .should('be.visible')

    //Hamburguer    
    cy.get('div[class="menu-top-button"]')
        .click()
        
    //Fazer logout        
    cy.get('div.menu-mobile.active div.content-menu-mobile div.body-menu-mobile nav:nth-child(1) ul.nav-menu li:nth-child(7) > a:nth-child(1)')
        .click()

    //Visualizar container de login
    cy.get('#loginForm')
        .should('be.visible')

})