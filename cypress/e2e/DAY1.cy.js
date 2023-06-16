

describe("Traversal Method of Cypress", () => {
    it("children() Method", () => {

        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-drinks-list').children().should('have.length', 5)

    })
})