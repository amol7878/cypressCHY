/// <reference types="Cypress" />


describe('verify the table in cypress',function(){
    function validateTableSum(id,expectedValue){
        let sum = 0
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get(`#t0${id}`).find('tbody').children().each(function(row,index){
            if(index != 0){
                //cy.log(row.text())
                sum = sum + Number(row.children().last().text())
            }
        }).then(function(){
            expect(sum).to.eq(expectedValue)
        })

    }

    it('Verify The Sum Of Value For Table One',function(){
        let sum = 0
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tbody').children().each(function(row,index){
            if(index != 0){
                //cy.log(row.text())
                sum = sum + Number(row.children().last().text())
            }
        }).then(function(){
            expect(sum).to.eq(159)
        })
    })

    it('Verify The Sum Of Value For Table Two',function(){

        let sum = 0
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02').find('tbody').children().each(function(row,index){
            if(index != 0){
                //cy.log(row.text())
                sum = sum + Number(row.children().last().text())
            }
        }).then(function(){
            expect(sum).to.eq(163)
        })

        
    })


    
    it('verify the sum of value for table two of all tables',function(){

        validateTableSum(1,159)
        validateTableSum(2,163)
       // validateTableSum(3,163)

        
    })






})