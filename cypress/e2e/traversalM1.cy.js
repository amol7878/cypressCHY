

describe('Traversal Method', function () {
    //1. children()
    it('To get children of DOM elements, use the .children() command', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)

        cy.get('.traversal-drinks-list').children().each(function (el) {
            cy.log(el.text())
        })

        cy.contains('Fruits').should('be.visible')

        cy.get('.traversal-food-list').children().should('have.length', 11)
        cy.get('.traversal-food-list').children().each((el) => {
            cy.log(el.text())
        })


    })

    //2. next()
    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').next().should('have.text', 'Apple')
        cy.get('#fruits').next().should('have.contain', 'Apple')
        cy.contains('Fruits').should('have.contain', 'Fru')

        cy.get('#coffee').next().should('have.text', 'Tea')
    })

    //3. prev()
    it('To get the previous sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text', 'Figs')

        cy.get('#veggie').prev().then(function (el) {
            expect(el.text()).to.equal('Figs')
        })

        cy.get('#veggie').prev().invoke('text').then((text) => {
            expect(text).to.eql('Figs')
        })

    })

    //4. nextAll()
    it('To get the previous sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextAll().should('have.length', 10)
        cy.get('#fruits').nextAll().each(function (el) {
            if (el.text() == 'Blackberries') {
                cy.wrap(el).should('be.visible')
                cy.wrap(el).should('be.exist')
            }
        })
    })

    //5. first()
    it.only('To get the previous sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.id', 'coffee')
        cy.get('.traversal-drinks-list').children().first().should('have.text', 'Coffee')
        cy.get('.traversal-drinks-list').children().first().should('have.attr', 'id', 'coffee')


        cy.get('.traversal-food-list').children().first().should('have.text','Fruits')
        cy.get('.traversal-food-list').children().first().should('have.attr','id','fruits')
    })

   

})