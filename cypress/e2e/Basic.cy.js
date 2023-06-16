/// <reference types="Cypress" />

describe('API Testing', function () {
    it('GET API to get user pageWise', function () {
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: "GET"
        })
            .then(function (response) {
                //cy.log(response)
                expect(response.status).to.eq(200)
            })
      
    })

    it('POST API to Create The User', function () {
        cy.request({
            url: "https://reqres.in/api/users",
            method: "POST",
            body:{
                "name": "RAVI",
                "job": "AQ"
            }
        })
            .then(function (response) {
                //cy.log(response)
                expect(response.status).to.eq(201)
            })
      
    })

    it('PUT API to Update The User', function () {
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "PUT",
            body:{
                "name": "AMOL",
                "job": "Tester"
            }
        })
            .then(function (response) {
                //cy.log(response)
                expect(response.status).to.eq(200)
            })
      
    })

    it.only('DELETE API to Delete The User', function () {
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "DELETE"
           
        })
            .then(function (response) {
                //cy.log(response)
                expect(response.status).to.eq(204)
            })
      
    })
})