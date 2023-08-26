


describe('Verify the Api', function () {
    it('Verify the Get request', function () {
        cy.request('GET', "https://reqres.in/api/users?page=2")
            .then(function (response) {
                //cy.log(response)
                expect(response.status).to.eq(200)
                expect(response.body.page).of.eq(2)
                expect(response.body.per_page).to.eq(response.body.data.length)
            })
    })

    it('Verify the Get request', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users",
            qs: { page: 2 }

        })
            .then(function (response) {
                expect(response.status).to.eq(200)
                expect(response.body.page).of.eq(2)
                expect(response.body.per_page).to.eq(response.body.data.length)
                expect(response.body.data[0]).to.have.property('id', 7)
                response.body.data.forEach(el => {
                    expect(el).to.have.property('first_name')
                    expect(el).to.have.property('last_name')
                    expect(el).to.have.property('id')
                    expect(el).to.have.property('email')
                    expect(el).to.have.property('avatar')
                });
            })



    })
    it('verify the post request', function () {

        let payload = {
            name: "chinmay",
            job: "tester"
        }
        cy.request({
            url: "https://reqres.in/api/users",
            method: "POST",
            body: payload
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(201)

            // {
            //     "name": "morpheus",
            //     "job": "leader",
            //     "id": "652",
            //     "createdAt": "2023-06-17T14:06:37.256Z"
            // }
            expect(response.body).to.have.keys(["name", 'job', 'id', 'createdAt'])
            expect(response.body.name).to.eq(payload.name)
            expect(response.body.job).to.eq(payload.job)

        })

    })
    it('verify the Update request', function () {
        let payload = {
            name: "morpheus",
            job: "zion resident"
        }
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: payload

        }).then(function (response) {
            cy.log(response)
            expect(response.duration).to.be.lessThan(500)
            expect(response.body).to.have.keys('job', 'name', 'updatedAt')
            expect(response.body).to.have.property('job', payload.job)
            expect(response.body).to.have.property('name', payload.name)
            expect(response.status).to.eq(200)
        })

    })
    it.only('Verify the Delete Request', function () {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2"

        }).then(function (response) {
            expect(response.status).to.eq(204)
        })
    })

})