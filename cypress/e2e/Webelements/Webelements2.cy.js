/// <reference types="cypress" />

// test scenario ==>verify the contact us form

//test case 1 ----validate the valid data
//test case 2 ----validate the reset button functionality
//test case 3 ---- validate the invalid data

describe('verify the contact us form', function () {
    it('verify the contact us form with valid data', function () {
        //Arrangment
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        //Action
        cy.get('input[name="first_name"]').type("Amol")
        cy.get('input[name="last_name"]').type("Shinde")
        cy.get('input[name="email"]').type("abbcs@gmail.com")
        cy.get('textarea[name="message"]').type("I am Learning Js")
        cy.get('input[type="submit"]').click()

        //Assertion

        cy.get('h1').should('be.visible')
    })

    it('verify the functionality of reset button', function () {
        //Arrangment
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        //Action
        cy.get('input[name="first_name"]').type("Amol")
        cy.get('input[name="last_name"]').type("Shinde")
        cy.get('input[name="email"]').type("abbcs@gmail.com")
        cy.get('textarea[name="message"]').type("I am Learning Js")
        cy.get('input[type="reset"]').click()

        //Assertion

        cy.get('input[name="first_name"]').should('have.text','')

    })

    it.only('verify the contact us form with invalid data', function () {
        //Arrangment
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        //Action
        cy.get('input[name="first_name"]').type("Amol")
        cy.get('input[name="last_name"]').type("Shinde")
        cy.get('input[name="email"]').type("abbcsgmail.com")
        cy.get('textarea[name="message"]').type("I am Learning Js")
        cy.get('input[type="submit"]').click()

        //Assertion

        cy.get('body').should('contain','Error: Invalid email address')
    })


})