///<reference types="Cypress"/>

describe('verify the GET POST PUT DELETE functionality', function () {
    it('Verify the post Request', function () {
        cy.intercept(
            //Request
            {
                method: "POST",
                url: "https://jsonplaceholder.cypress.io/comments"
            }
        ).as('PostComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains("Post Comment").click()
        cy.wait('@PostComment').then(function ({ request, response }) {
            expect(request.method).to.eq("POST");
            expect(response.statusCode).to.eq(201)
            expect(response.body).to.have.keys("name", "body", "email", "id")
            cy.get('.network-post-comment').should('have.text', 'POST successful!')
        })
    })

    it.only("Verify the update Button",function(){
        let message="whoa,this comment does not exist"
        cy.intercept(
            //Request
            {
                method:"PUT",
                url:"https://jsonplaceholder.cypress.io/comments/1"
            },
            //Response
            {
             statusCode:404,
             body:{error:message},
             headers:{'access-control-allow-origion':'*'},
             delayMs:500,
            }
        ).as('putComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains("Update Comment").click()
        cy.wait('@putComment').then(function (obj) {
            //cy.log(obj)
            expect(obj.response.body.error).to.eq(message)
        })      
    })


})