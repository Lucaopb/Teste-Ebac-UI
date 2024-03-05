/// <reference types="cypress"/>

describe('funcionalidade: login' , () => {

    it('Deve fazer login com sucesso' , () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get ('#username') .type ('lucasb.teste@teste.com.br')
        cy.get('#password') .type('Teste@123')
        cy.get('.woocommerce-form > .button') .click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain' , 'Olá, lucasb.teste (não é lucasb.teste? Sair)' )
    })
})