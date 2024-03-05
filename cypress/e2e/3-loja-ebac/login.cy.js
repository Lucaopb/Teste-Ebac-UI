/// <reference types="cypress"/>

describe('funcionalidade: login' , () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso' , () => {
       
        cy.get ('#username') .type ('lucasb.teste@teste.com.br')
        cy.get('#password') .type('Teste@123')
        cy.get('.woocommerce-form > .button') .click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain' , 'Olá, lucasb.teste (não é lucasb.teste? Sair)' )
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        
        cy.get ('#username') .type ('Lucas@teste.com.br')
        cy.get('#password') .type('Teste@123')
        cy.get('.woocommerce-form > .button') .click()
        cy.get('.woocommerce-error') .should('contain' , 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error') .should('exist')
        
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        
        cy.get ('#username') .type ('lucasb.teste@teste.com.br')
        cy.get('#password') .type('Teste.@123')
        cy.get('.woocommerce-form > .button') .click()
        cy.get('.woocommerce-error') .should('exist')
    });
})