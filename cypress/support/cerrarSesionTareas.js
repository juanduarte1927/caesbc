import cerrarSesionPage from './pages/cerrar-sesion-page';
import iniciarSesionPage from './pages/iniciar-sesion-page';

const cierraSesionPage = new cerrarSesionPage();
const iniciaSesionPage = new iniciarSesionPage();

Cypress.Commands.add('cerrarSesion', function () {
    cierraSesionPage.getTituloSesionIniciada().should('be.visible')
    cierraSesionPage.getLogout().click()
    iniciaSesionPage.getUsuario().should('be.visible')
})