/// <reference types="cypress" />
import iniciarSesionPage from '../../support/pages/iniciar-sesion-page';
const iniciaSesionPage = new iniciarSesionPage();

before('Cargar Datos', () => {
  cy.fixture('login')
    .then(function (login) {
      this.login = login
    })
})

describe('Login de usuarios....', () => {

  beforeEach(() => {
    cy.visit('practice-test-login')
  })

  it('Usuario ingresa de forma segura a la aplicación correctamente...', function () {
    cy.iniciarSesion(this.login.usuarioValido, this.login.contraseñaValida);
    cy.get('.post-title').should('be.visible')
  })

  it('Usuario no puede ingresar a la aplicación por usuario incorrecto', function () {
    cy.iniciarSesion(this.login.usuarioInvalido, this.login.contraseñaValida);
    iniciaSesionPage.getMensajeSesionIncorrecta().should('have.text', this.login.mensajeUsuarioInvalido).and('be.visible')
  })

  it('Usuario no puede ingresar a la aplicación por contraseña incorrecta', function () {
    cy.iniciarSesion(this.login.usuarioValido, this.login.contraseñaInvalida);
    iniciaSesionPage.getMensajeSesionIncorrecta().should('have.text', this.login.mensajeContraseñaInvalido).and('be.visible')
  })

  it('Usuario puede sarir de la aplicación correctamente...', function () {
    cy.iniciarSesion(this.login.usuarioValido, this.login.contraseñaValida);
    cy.cerrarSesion()
  })
})
