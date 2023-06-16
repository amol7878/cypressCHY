/// <reference types="cypress"/>

describe('travesrsal method in cypress', function () {

  it('To get children of DOM elements, use the .children() command.', function () {
    //To opening url in the Browser
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
    cy.get('.traversal-food-list').children().should('have.length', 11)
    cy.get('.traversal-food-list').should('have.class', 'traversal-food-list')
  })

  it.only('To get the next sibling DOM element within elements, use the .next() command.', function () {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
    cy.get('#fruits').next().should('have.text', "Apple")
  })

  it('To get the previous sibling DOM element within elements, use the .prev()', function () {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
    cy.get('#veggie').prev().should('have.text', "Figs")

  })
})
