//to run cypress as headed testing then enter(npx cypress open). 
//to run cypress as headless testing then enter(npx cypress run )
describe('Testing of home...' , ()=>{
  it('verify if logo is present and reachble', ()=>{
    cy.visit("http://localhost:3000/")
    cy.contains(/If you can dream it, you can sell it with Shopify/i)
    cy.url("include", "/Home")
  })
  it("verify discover ", ()=>{
    cy.visit("http://localhost:3000")
   // cy.get("#trial").contains(/start free trial/i).dblclick();
    cy.get('["#trial"]').click()
   // cy.url("include", "/register")
  })
})