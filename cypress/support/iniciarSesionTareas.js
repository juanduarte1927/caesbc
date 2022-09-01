import iniciarSesionPage from './pages/iniciar-sesion-page.js';

const iniciaSesionPage = new iniciarSesionPage();

Cypress.Commands.add('iniciarSesion', function (usuario, contraseña) {
    iniciaSesionPage.getUsuario().type(usuario)
    iniciaSesionPage.getContraseña().type(contraseña)
    iniciaSesionPage.getSubmit().click()
})
