/// <reference types="Cypress"/>
describe('Verify the iframe in js',function(){
    it('Verify functionality for iframe using javascript',function(){
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        //cy.contains('Home')
        cy.get('#frame').then(function(iframe){
            let bdy=iframe[0].contentDocument.body
            cy.wrap(bdy).as('body')
            cy.get('@body').find('a[href="index.html"]').should('have.text','Home')
        })
    })

    it.only('Verify the functionality for iframe using jquery',function(){
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        //cy.contains('Home)
        cy.get('#frame').then(function(iframe){
           let bdy=iframe.contents().find('body')
           cy.wrap(bdy).as('body')
           cy.get('@body').find('a[href="index.html"]').should('have.text','Home')
        })
    })
})