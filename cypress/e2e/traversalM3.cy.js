/// <reference types="Cypress" />

describe('traversal method', function () {

    //11.nextUntil()

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextUntil('#veggie').should('have.length', 5)
    })

    //12..prevUntil()

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)
    })

     //13..filter()

     it('To get DOM elements that match a specific selector, use the .filter() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
    })

    //14.find()

    it.only('To get descendant DOM elements of the selector, use the .find() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-other-states').find('.btn-primary').should('have.length',4)
    })
})