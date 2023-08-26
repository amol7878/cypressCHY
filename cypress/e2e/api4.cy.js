/// <reference types="Cypress"/>

describe('verify end to end call create update delete', function () {
    it('verify the post patch and delete request', function () {
        let id;
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                name: "Amol Shinde",
                gender: "male",
                email: `tenali.${Math.floor(Math.random() * 1000)}ramakrishna@85ce.com`,
                status: "active"
            },
            headers: {
                Authorization: `Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe`

            }
        })
        .then(function (response) {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.keys(["id", "name", "email", "gender", "status"])
            id = response.body.id
        })
        .then(function () {
            cy.request({
                method: "PATCH",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                body: {
                    name: "chinmay deshpande",
                    email: `tenali.${Math.floor(Math.random() * 1000)}ramakrishna@85ce.com`,
                    status: "active"
                },
                headers: {
                    Authorization: `Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe`

                }
            })
                .then(function (response) {
                    expect(response.status).to.eq(200)
                    expect(response.body).to.have.keys(["id", "name", "email", "gender", "status"])
                })
                .then(function () {
                    cy.request({
                        method: "DELETE",
                        url: `https://gorest.co.in/public/v2/users/${id}`,
                        headers:{
                            Authorization:`Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe`
                        }

                    })
                    .then(function(response){
                      expect(response.status).to.eq(204)
                    })
                })
        })
    })
        
})
