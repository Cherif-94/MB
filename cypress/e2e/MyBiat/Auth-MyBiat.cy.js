/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {

    console.log("%c" + "Made with Love ❤️ => Cherif Ayachi QA Engineer JavaScript Cypress  !", "color: #7289DA; -webkit-text-stroke: 2px black; font-size: 25px; font-weight: bold;");

    beforeEach(() => {

      cy.log('Hello , Cypress is amazing :) <3  ')
      
      cy.viewport(1440,900) ; 

      cy.visit('') ; 

      
      cy.location('protocol').should('eq' , 'http:')
         
      cy.title().should('eq' , 'Se connecter à BIAT Retail') ; 

      cy.get('#username').type('rachida.bellouma@value.com.tn') ; 

      cy.get('#password').type('ValueBIAT.2020') ; 

      cy.get('#kc-login').click() ;

    })
  
    it('first auto test for MyBiat Application  ' , () => { 
         
         
         cy.log('Hello my biat') ;
  
         cy.visit('http://ips-edge-edge-test.tst-ocpapps.biat.int:8080/mybiat-web/#/products') ;
  
         // cy.contains('Ok').click() ; 
  
         cy.get('.d-none > .dropdown-icon').click() ; 
  
         cy.get('.profile > .dropdown-menu > :nth-child(1)').click()  ; 

         cy.get(':nth-child(1) > .details > .d-flex > .edit-icon-container > .edit-icon').click()   ; 

         cy.get('#email').type('rachida.bellouma@value.com.tn') ; 

         cy.get('#accept-terms-btn').contains('Suivant').click() ; 

         cy.get('.biat-custom-notification-card').contains('MyBIAT vous a envoyé un Email sur rachida.bellouma@value.com.tn') ; 

         cy.get('#otp').type('123456') ; 

         cy.contains('Confirmer').click() ; 


         cy.get('.profile-modal-body > .ng-star-inserted' , {timeout:2000}).should('be.visible') ; 

         cy.contains('Retour à la page de connexion').click()

          cy.timeout(1000 , 'waiting response to show our message Good bye ') ; 
          
          cy.log('Good bye My Biat !!! ') 

          cy.reload()

          cy.log('Good bye My Biat !!! ') 


         
    })

    it('second auto test for MyBiat Application' , () => {
          
          cy.log('Hello world ')

          cy.visit('http://ips-edge-edge-test.tst-ocpapps.biat.int:8080/mybiat-web/#/products') ; 
          
          cy.get('#mega-menu-pc-screen > bb-mega-menu-navigation-container > .bb-mega-menu > .bb-mega-menu__items > :nth-child(4) > #bb-menu-header-button-3 > .bb-mega-menu__item-description').click() ;
          
          cy.get('.content-header-title').should('be.visible').contains('Gestion de chéquiers') ; 

          cy.contains(`Commande d’un nouveau chéquier`) ; 

          cy.contains(`Suivi des commandes de chéquiers`)


    })


  it('Third Auto Test ' , () => {
       
        cy.log('Hello , Cypress is amazing :) ')

        cy.log('Hello world , Hello Cypress , Hello JavaScript ')

        cy.log('testing Integration Cypress with Cloud Cypress and Github !! we will see another advantages soon  ')
  })

  
  
    })
  
  