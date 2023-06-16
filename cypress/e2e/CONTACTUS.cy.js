/// <reference types="Cypress" />

describe('Verify The Contact Us Form', function () {

    beforeEach(function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('Verify The Contact Us With Valid Input', function () {
        cy.get('[name="first_name"]').type("Amol")
        cy.get('[name="last_name"]').type('Shinde')
        cy.get('[name="email"]').type('amolshinde@gmail.com')
        cy.get('[name="message"]').type('I AM Learning')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('Verify The Functionality Of Reset Button', function () {
        cy.get('[name="first_name"]').type("Amol")
        cy.get('[name="last_name"]').type('Shinde')
        cy.get('[name="email"]').type('amolshinde@gmail.com')
        cy.get('[name="message"]').type('I AM Learning')
        cy.get('[type="reset"]').click()
        cy.get('[name="first_name"]').should('have.text', '')
        cy.get('[name="last_name"]').should('have.text', '')
        cy.get('[name="email"]').should('have.text', '')
        cy.get('[name="message"]').should('have.text', '')
    })

    it('Verify The Contact Us With Invalid Email Address', function () {
        cy.get('[name="first_name"]').type("Amol")
        cy.get('[name="last_name"]').type('Shinde')
        cy.get('[name="email"]').type('amolshinde1234')
        cy.get('[name="message"]').type('I AM Learning')
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain', 'Error: Invalid email address')
    })

    it.only('Verify The Heading And Title Of The Page', function () {
      cy.get('h2[name="contactme"]').should('have.text','CONTACT US').and('be.visible')
      cy.title().should('eq','WebDriver | Contact Us')
    })

})