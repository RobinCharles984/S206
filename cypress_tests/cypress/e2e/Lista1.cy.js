describe('template spec', () => (
  it.skip('Entrar no site do Inatel', () => {
    cy.visit('https://inatel.br/vestibular/')
  }),

  it.skip('Verificar se todos os cursos de graduação estão presentes', () => {
    cy.visit('https://inatel.br/vestibular/')
    cy.get(':nth-child(1) > .boxLink > h4').should('have.text', "Engenharia Biomédica")
    cy.get(':nth-child(2) > .boxLink > h4').should('have.text', "Engenharia de Computação")
    cy.get(':nth-child(3) > .boxLink > h4').should('have.text', "Engenharia de Controle e Automação")
    cy.get(':nth-child(4) > .boxLink > h4').should('have.text', "Engenharia Elétrica")
    cy.get(':nth-child(5) > .boxLink > h4').should('have.text', "Engenharia de Produção")
    cy.get(':nth-child(6) > .boxLink > h4').should('have.text', "Engenharia de Software")
    cy.get(':nth-child(7) > .boxLink > h4').should('have.text', "Engenharia de Telecomunicações")
  }),

  it.skip('Verificar se há todas as fotos de infraestrutura', () => {
    cy.visit('https://inatel.br/vestibular/')
    cy.get(':nth-child(7) > .wrap1396 > .wrapCont > .flexBoxGeral > :nth-child(1) > p').should('have.text', "Teatro Inatel")
    cy.get(':nth-child(7) > .wrap1396 > .wrapCont > .flexBoxGeral > :nth-child(2) > p').should('have.text', "Campus Inatel")
    cy.get(':nth-child(7) > .wrap1396 > .wrapCont > .flexBoxGeral > :nth-child(3) > p').should('have.text', "Sala de Estudos Biblioteca")
    cy.get(':nth-child(7) > .wrap1396 > .wrapCont > .flexBoxGeral > :nth-child(4) > p').should('have.text', "Prédio CICCT")
    cy.get('.flexBoxGeral > :nth-child(5) > p').should('have.text', "Prédio Central")
    cy.get(':nth-child(6) > p').should('have.text', "Campus Inatel ")
  }),

  it.skip('Verificar funcionamento do saber mais', () => {
    cy.visit('https://inatel.br/vestibular/')
    cy.get('#rd-text_field-ljyahw1p').type("Nome")
    cy.get('#rd-email_field-ljyahw1q').type("email@email.com")
    cy.get('#rd-phone_field-ljyahw1r').type("99912341234")
    cy.get('#rd-checkbox_field-ljyahw1t').check()
    cy.get('#rd-button-lixhofbs').click()
  }),

  it.skip('Testar erro no login do aluno no site academico', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.loginInatel('1234', '12341234')
    cy.get('#ctl00_Corpo_UpdatePanel1 > :nth-child(1)').should('contain.text', 'Sua tentativa de logar no sistema via curso/matricula não obteve êxito. Tente novamente.')
  }),

  it.skip('Testar erro no login do professor no site academico', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.loginProfessor('1234', '12341234')
    cy.get('#ctl00_Corpo_TabAcessoLogin_TabDocente_LoginUsuario > :nth-child(1) > :nth-child(1) > :nth-child(1) > table > tbody > :nth-child(2) > td').should('contain.text', "Este acesso é permitido somente para docentes ou funcionários. O aluno deverá selecionar a Aba 'Graduação'.")
  })
))