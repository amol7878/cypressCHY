/// <reference types="cypress" />

// testscenario
//testcase

describe('Working with WebElement', function () {

    it('visit the webpage', function () {
        // Visit the Url
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        //type into input element

        //type() -method
        //<input name="first_name" type="text" class="feedback-input" placeholder="First Name">
        cy.get('input[name="first_name"]').type("amol")
        cy.get('input[name="last_name"]').type("Shinde")
        cy.get('input[name="email"]').type("abcd@gmail.com")
        cy.get('textarea[name="message"]').type("I am Learning Cypress")

        //click()
        //cy.get('input[type="submit"]').click()

        //submit()
        //cy.get("#contact_form").submit()

        //clear()

        cy.get('input[name="first_name"]').clear()

        //getAttribute
        // //<input name="first_name" type="text" class="feedback-input" placeholder="First Name">
        cy.get('input[name="first_name"]').should('have.attr',"name",'first_name')
        cy.get('input[name="first_name"]').then(function(el){
            cy.log(el.prop('name'))
            cy.log(el.prop('type'))
            cy.log(el.prop('class'))
            cy.log(el.prop('placeholder'))

        })

        cy.get('input[name="first_name"]').invoke('prop','name').then(function(str){
            cy.log(str)
        })
        cy.get('input[name="first_name"]').invoke('prop','class').then(function(str){
            cy.log(str)
        })
    })
})