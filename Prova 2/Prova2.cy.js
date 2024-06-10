describe('Prova 2 - Computer Database', () => (
  it('Entrando no site', () => {
    cy.visit('https://computer-database.gatling.io/computers')
  }),

  it('Pesquisando nome de PC', () => {
    searchComputer("ACER")
  }),

  it('Adicionando novo PC', () => {
    addPC("TK-90X", "1985-06-01", "2000-01-01", "Sinclair Research Ltd")
  }),

  it('Pesquisando PC criado', () => {
    //Esperando erro pois não existe este PC na lista mesmo depois de criado
    searchComputer("TK-90X"),
    cy.get('#pagination').should('have.text', "TK-90X")
  })
))

function searchComputer(pcName){
  cy.visit('https://computer-database.gatling.io/computers'),
  cy.get('#searchbox').type(pcName),
  cy.get('#searchsubmit').click()
}

function addPC(computerName, introducedDate, discontinuedDate, companyName){
  cy.visit('https://computer-database.gatling.io/computers'),
  cy.get('#add').click(),
  cy.get('#name').type(companyName),
  cy.get('#introduced').type(introducedDate),
  cy.get('#discontinued').type(discontinuedDate),
  cy.get('#company').select(companyName),
  cy.get('.primary').click()
}