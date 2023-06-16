it('To get a DOM element at a specific index, use the .sibling() command.', function () {
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    //cy.get('button[class="btn btn-primary active"]').siblings().should('have.length',3)

    cy.get('#veggie').prevAll().each(function(el){
        if(el.hasClass('list-header')){
            cy.log(el.text())
        }
    })
})
