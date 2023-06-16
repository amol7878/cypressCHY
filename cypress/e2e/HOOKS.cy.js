/// <reference types="Cypress" />

describe('hooks in cypress', function () {
    before(function () {
        cy.log('I will run first')
    })

    beforeEach(function () {
        cy.log('I will run before each testcase')
    })

    afterEach(function () {
        cy.log('I will run after each testcase')
    })

    it('Test case one', function () {
        cy.log('Testcase one')
    })

    it('test case two', function () {
        cy.log('testcase Two')
    })

    after(function () {
        cy.log('i will run last')
    })
})