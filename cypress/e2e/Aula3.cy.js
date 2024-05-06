/// <reference = cypress>
let info
describe("Teste da criação, registro e login", ()=> (
  it.skip("Teste criação de usuario com sucesso", ()=> (
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login'),
    cy.get('.btn-link').click(),
    cy.get('#firstName').type("Charles"),
    cy.get('#Text1').type("Entertainment"),
    cy.get('#username').type("Charlin"),
    cy.get('#password').type("charlin123"),
    cy.get('.btn-primary').click(),
    cy.get('.ng-binding').should("contain.text", "Registration successful")
  )),

  it.skip("Teste criação de usuario com falha", ()=> (
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login'),
    cy.get('.btn-link').click(),
    cy.get('#firstName').type("Charles"),
    cy.get('#Text1').type("Entertainment"),
    cy.get('#username').type("Charlin"),
    cy.get('.btn-primary').should("be.disabled")
  )),

  it.skip("Teste login de usuario", ()=> (
    info = createUser(),
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login'),
    cy.get('#username').type(info[0]),
    cy.get('#password').type(info[1]),
    cy.get('.btn-primary').click(),
    cy.get('h1.ng-binding').should("contain.text", info[0])
  )),

  it.skip("Teste delete de usuario", ()=> (
    info = createUser(),
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login'),
    cy.get('#username').type(info[0]),
    cy.get('#password').type(info[1]),
    cy.get('.btn-primary').click(),
    cy.get('h1.ng-binding').should("contain.text", info[0]),
    cy.get('.ng-binding > a').click(),
    cy.get('.btn').click(),
    cy.get('#username').type(info[0]),
    cy.get('#password').type(info[1]),
    cy.get('.btn-primary').click(),
    cy.get('.ng-binding').should("have.text", "Username or password is incorrect")
  ))
))

function createUser(){
  let hour = new Date().getHours().toString()
  let min = new Date().getMinutes().toString()
  let sec = new Date().getSeconds().toString()
  let ID = hour + min + sec + "ID"
  let password = hour + min + sec + "Password"
  let infos = [ID, password]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login'),
  cy.get('.btn-link').click(),
  cy.get('#firstName').type(ID),
  cy.get('#Text1').type(ID),
  cy.get('#username').type(ID),
  cy.get('#password').type(password),
  cy.get('.btn-primary').click(),
  cy.get('.ng-binding').should("contain.text", "Registration successful")
  return infos
}