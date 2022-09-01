class iniciarSesionPage {

    getUsuario() {
        return cy.get('#username')
    }
    
    getContraseña() {
        return cy.get('#password')
    }

    getSubmit() {
        return cy.get('#submit')
    }

    getMensajeSesionIncorrecta() {
        return  cy.get('#error')
    }
}

export default iniciarSesionPage;