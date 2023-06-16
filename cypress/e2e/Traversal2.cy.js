/// <reference types="Cypress" />


// What to test - test scenario
// How to test - testcases
// Suite --- testcases

describe('traversal method in cypress', function () {
    it('To get children of DOM elements, use the .children() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().should('have.length', 11)
        cy.get('.traversal-food-list').children().each(function (el) {
            cy.log(el.text())
        })
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text', 'Figs')
        cy.get('#veggie').prev().then(function (el) {
            expect(el.text()).to.eq('Figs')
        })
        cy.get('#veggie').prev().invoke('text').then(function (txt) {
            expect(txt).to.eq('Figs')
        })
    })

    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').next().should('have.text', 'Asparagus')
        cy.get('#veggie').next().then(function (el) {
            expect(el.text()).to.eq('Asparagus')
        })
    })

    it('To get the next sibling DOM element within elements, use the .first() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children()
            .first()
            .should('have.text', 'Fruits')
            .and('have.attr', 'id', 'fruits')
            .and('have.class', 'list-header')
            .and('have.id', "fruits")
    })

    it('To get the next sibling DOM element within elements, use the .last() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children()
            .last()
            .should('have.text', 'Lentils')
    })

    it('To get the next sibling DOM element within elements, use the .eq() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children()
            .eq(2)
            .should('have.text', 'Banana')
    })

        // children() , prev() , next() , eq() , first(), last()

        it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
            cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
            cy.get('.disabled').siblings().should('have.length', 3)
            cy.get('.disabled').siblings().each(function (el) {
                cy.log(el.text())
            })
        })
    
        it.only('To get all previous sibling DOM elements within elements, use the .prevAll() command.', function () {
            cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
            cy.get('#veggie').prevAll().as('aboveElement')
            cy.get('@aboveElement').should('have.length', 6)
    
    
            let eleFound = false
            cy.get('@aboveElement').each(function(el){
                if(el.text() === "Banana"){
                    eleFound = true
                }
            }).then(function(){
                expect(eleFound).to.eq(true)
            })
    
            let elementTexts = []
            cy.get('@aboveElement').each(function(el){
                elementTexts.push(el.text())
            }).then(function(){
                expect(elementTexts.includes('Banana')).to.eq(true)
            })
            cy.get('@aboveElement').contains('Banana').should('exist');
    
    
        })
    
        it('To get all next sibling DOM elements within elements, use the .next() command.', function () {
            cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
            cy.get('#veggie').nextAll().should('have.length',4)
        })
    
        
    
        it.only('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
            cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
            cy.get('#fruits').nextUntil('#veggie').should('have.length',5)
            
        })
    
        it.only('To get all of the nprevious sibling DOM elements within elements until another element, use the .prevUntil() command.', function () {
            cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
            cy.get('#veggie').prevUntil('#fruits').should('have.length',5)
            
        })    


})