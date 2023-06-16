/// <reference types="Cypress" />



describe('Verify the functionality of checkBox,RadioButton,Select Drop Down', function () {
    beforeEach(function () {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('Verify The Functionality Of Radio Buttons', function () {
        //basic
        //    cy.get('input[value="green"]').click().should('be.checked')
        //    cy.get('input[value="green"').check().should('be.checked')
        //    cy.get('input[value="blue"').should('not.be.checked')
        cy.get('#radio-buttons').children().filter('input')
            .should('have.length', 5)
            .each(function (el) {
                cy.wrap(el).check().should('be.checked')
            })
    })

    it('Verify The Functionality for CheckBox', function () {

        //CheckBox-1 ---------tick---click()
        //CheckBox-1 ---------tick---check()
        //CheckBox-1 ---------tick---uncheck()

        //with the check and uncheck Method

        // cy.get('[value="option-3"]').should('be.checked')
        // cy.get('[value="option-3"]').check().should('be.checked')
        // cy.get('[value="option-3"]').uncheck().should('not.be.checked')

        //with click()

        // cy.get('[value="option-3"]').should('be.checked')
        // cy.get('[value="option-3"]').click().should('not.be.checked')
        // cy.get('[value="option-3"]').click().should('be.checked')

        //cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')
        // cy.get('input[type="checkbox"]').each(function (el) {
        //     cy.wrap(el).check().should('be.checked')
        //     cy.wrap(el).uncheck().should('not.be.checked')
        // })

        // cy.get('input[type="checkbox"]').each(function(el,index){
        //     if(index !=2){
        //         cy.wrap(el).click().should('be.checked')
        //         cy.wrap(el).click().should('not.be.checked')
        //     }
    })

    //Selected ,  Enabled , Disabled ,Visible ,Exist 

    it('enable disabled selected exist Visible', function () {
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="lettuce"]').should('be.enabled')
        cy.get('input[value="pumpkin"]').should('to.be.checked')
        cy.get('#fruit-selects').should('exist')


    })

    it('Verify the Select Drop down In cypress', function () {
        //cy.get('#dropdowm-menu-1').select('python')
        //cy.get('#dropdowm-menu-1').select('Python')
       let arr=['python','testng','javascript']
       cy.get('.section-title').first().children().each(function(el,index){
           cy.wrap(el).select(arr[index]).should('have.value',arr[index])
       })
    })

    it.only('Verify the Select Drop down In cypress', function () {
       cy.url().should('contain','Dropdown-Checkboxes-RadioButtons')
       
    })



})