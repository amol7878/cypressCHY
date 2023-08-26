/// <reference types="Cypress"/>

describe('Verify the contact us form', function () {
    // let obj={
    //     firstName:"Chinmay",
    //     lastName:"deshpande",
    //     email:"chinmaydeshpande0001@gmail.com",
    //     message:"I am Learning Js"
    // }
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
        cy.fixture('multipleUser').then(function (users) {
            this.users = users
        })
    })
    it.skip('verify the contact us Form', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type("chnamy")
        cy.get('input[name="last_name"]').type("deshpande")
        cy.get('input[name="email"]').type('chnamaydeshpande11@gmail.com')
        cy.get('textarea[name="message"]').type('I am Learning Js')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    it.skip('verify the contact us Form -Object', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(obj.firstName)
        cy.get('input[name="last_name"]').type(obj.lastName)
        cy.get('input[name="email"]').type(obj.email)
        cy.get('textarea[name="message"]').type(obj.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    it.skip('verify the contact us Form -for testCase fixture', function () {
        cy.fixture('example').then(function (data) {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

    })
    it.skip('verify the contact us Form -before', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data.firstName)
        cy.get('input[name="last_name"]').type(this.data.lastName)
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('textarea[name="message"]').type(this.data.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    it.skip('verify the contact us Form -Multiple User Incoreect Way', function () {
        cy.log(this.users)
        this.users.forEach(function (el) {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
    users.forEach(function(el,index){
        it(`running with test data ${index+1}`,function(){
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
})


