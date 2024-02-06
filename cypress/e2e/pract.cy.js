///<reference types="Cypress"/>

describe("Verify FileUplode in cypress",()=>{
    it("verify FileUplode",()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
         cy.get('#file-upload').attachFile('Capture.png')
        cy.get('#file-submit').click()
        cy.get("div>h3").should("have.text",'File Uploaded!')
        cy.get("#uploaded-files").contains('Capture')
        cy.get("#uploaded-files").should('contain','Capture')

    })

})