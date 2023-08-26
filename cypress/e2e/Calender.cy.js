/// <reference types="Cypress" />

describe('Verify the date Picker', () => {
 // number,boolean,string,array,object,htmlElement
 // map(),set()

    it('Verify the functionality of DatePicker', () => {
       let date=new Date()
       let year=date.getFullYear()
       let month=date.getMonth()
       let date2=date.getDate()
       let lmonth =date.toLocaleString('dafault',{month:"long"})
       let smonth =date.toLocaleString('dafault',{month:"short"})

       cy.log(year)
       cy.log(month)
       cy.log(date2)
       cy.log(lmonth)
       cy.log(smonth)

       let date400=new Date()
       date400.setDate(date400.getDate()+400)
       
       cy.visit("http://www.webdriveruniversity.com/Datepicker/index.html")
       cy.get('#datepicker').click()

       function seelctMonthAndYear(){
          cy.get('.datepicker-switch').first().then(function(){
             cy.log(el.text())
             if(!el.text().includes(year2))
          })
       }


    })
})