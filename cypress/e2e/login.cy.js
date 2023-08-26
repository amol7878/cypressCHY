/// <reference types="Cypress"/>

describe('Verfy the login functionality with sauce demo', function () {
    let credentials = {
        username: "standard_user",
        password: "secret_sauce"
    }

    before(function () {
        cy.fixture("credentials").then(function (data) {
            this.data = data
        })
    })
    // it('Verify the login functionality',function(){
    //     cy.visit('https://www.saucedemo.com/v1/index.html')
    //     cy.get('#user-name').type('standard_user')
    //     cy.get('#password').type('secret_sauce')
    //     cy.get('#login-button').click()
    //     cy.get('.app_logo').should('be.visible')
    // })
    it('Verify the login functionality', function () {
        //cy.log(this.data.username)
        //cy.log(this.data.password)
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type(credentials.username)
        cy.get('#password').type(credentials.password)
        cy.get('#login-button').click()
    })

    it('Verify the login with fixture for each testcase', function () {
        //cy.log(this.data.username)
        //cy.log(this.data.password)
        cy.fixture('credentials').then(function (data) {
            cy.visit('https://www.saucedemo.com/v1/index.html')
            cy.get('#user-name').type(data.username)
            cy.get('#password').type(data.password)
            cy.get('#login-button').click()
        })

    })

    it.only('Verify the login with fixture for each testcase', function () {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type(this.data.username)
        cy.get('#password').type(this.data.password)
        cy.get('#login-button').click()
    })
})