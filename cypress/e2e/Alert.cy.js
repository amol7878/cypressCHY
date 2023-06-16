/// <reference types="Cypress" />

describe('JS Alert', function () {


    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Normal Js Alert', function () {

        cy.on('window:alert', function (str) {
            expect(str).to.eql('I am a JS Alert')
            return true
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it('Js Confirm Alert with ok', function () {
        cy.on('window:confirm', function (str) {
            expect(str).to.eql('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('Js Confirm Alert with cancel', function () {
        cy.on('window:confirm', function (str) {
            expect(str).to.eql('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    it('Js Prompt with OK', function () {
        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('I Am Learning Js')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text', 'You entered: I Am Learning Js')
    })

    it('Js Prompt with cancel', function () {

    })
})
