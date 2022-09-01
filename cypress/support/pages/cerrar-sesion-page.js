class cerrarSesionPage {

    getTituloSesionIniciada() {
        return cy.get('.post-title')
    }
    
    getLogout() {
        return cy.get('.wp-block-button__link')
    }
}

export default cerrarSesionPage;