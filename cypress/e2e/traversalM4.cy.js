/// <reference types="Cypress" />


describe('Traversal Method', function () {

    it('find()/filter()', function () {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-pagination').find('li').find('a').filter('a[aria-label="Next"]').then((el) => {
            cy.log(el)

        })


    })

    it.only('not()', function () {

        //10 element ==> .xyz  => filter(.xyz)
        //10 element==> .xyz==> not(.xyz)

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')

        cy.get('.traversal-button-states').find('.btn').not('.disabled').should('have.length', 3)
        cy.get('.traversal-button-states').find('.btn').not('.disabled').should('have.length', 3)
    })

    it('closest()', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-pagination').children().first().closest('div').should('have.class', 'thumbnail')
        cy.get('.traversal-pagination').children().eq(2).closest('div').should('have.class', 'thumbnail')

    })

    it('parent()', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').parent().should('have.class', 'traversal-drinks-list')
    })

    it('parents()', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').parents().should('have.length', 6)

    })

    it('parentsUntil()', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').parentsUntil('.thumbnail').should('have.length', 1)
    })
})