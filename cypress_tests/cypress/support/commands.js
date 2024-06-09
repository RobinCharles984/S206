// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (user, password) => (
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login'),
    cy.get('#username').type(user),
    cy.get('#password').type(password),
    cy.get('.btn-primary').click()
)),

Cypress.Commands.add('loginInatel', (user, password) => (
    cy.visit('https://siteseguro.inatel.br/PortalAcademico/WebLogin.aspx?ReturnUrl=%2fPortalacademico'),
    cy.get('#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_tbMatricula').type('1234'),
    cy.get('#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_Password').type('12341234'),
    cy.get('#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_LoginButton').click()
)),

Cypress.Commands.add('loginProfessor', (user, password) => (
    cy.visit('https://siteseguro.inatel.br/PortalAcademico/WebLogin.aspx?ReturnUrl=%2fPortalacademico'),
    cy.get('#__tab_ctl00_Corpo_TabAcessoLogin_TabDocente > span').click(),
    cy.get('#ctl00_Corpo_TabAcessoLogin_TabDocente_LoginUsuario_UserName').type('1234'),
    cy.get('#ctl00_Corpo_TabAcessoLogin_TabDocente_LoginUsuario_Password').type('12341234'),
    cy.get('#ctl00_Corpo_TabAcessoLogin_TabDocente_LoginUsuario_LoginButton').click()
))