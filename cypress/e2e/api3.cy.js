//
//CreateUser
//Update User
//Delete User

describe('Verify the e2e function', function () {
    it('Verify the Create and Update User', function () {
        let tokenV = `63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe`
        let id = null;
        cy.request({
            method: "POST",
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: `Bearer ${tokenV}`
            },
            body: {
                name: "Amol Shinde",
                gender: "male",
                email: `tenali.${Math.floor(Math.random() * 1000)}ramakrishna@85ce.com`,
                status: "active"
            }
        }).then(function (response) {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            return response.body.id
        })
            .then(function (id) {
                cy.request({
                    method: "PUT",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: `Bearer ${tokenV}`
                    },
                    body: {
                        name: "Amol Shinde",
                        email: `tenali.${Math.floor(Math.random() * 1000)}ramakrishna@85ce.com`,
                        status: "active"
                    }
                }).then(function (response) {
                    expect(response.status).to.eq(200)
                })
                    .then(function () {
                        cy.request({

                            method: "DELETE",
                            url: `https://gorest.co.in/public/v2/users/${id}`,
                            headers: {
                                Authorization: `Bearer ${tokenV}`
                            }
                        }).then(function (response) {
                            expect(response.status).to.eq(204)

                        })



                    })

            })
    })

})