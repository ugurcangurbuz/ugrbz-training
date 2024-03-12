describe('Check Sections', () => {
  // Hide Uncaught Exceptions
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  // Hide Command Request Logs
  const app = window.top;
  if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style');
    style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
    style.setAttribute('data-hide-command-log-request', '');
    app.document.head.appendChild(style);
  }

  const webdata = require('../fixtures/data.json'); 

  webdata.forEach(sectors => {
    it(sectors.name, () => {
      cy.visit('https://thetraininghub.com')
      cy.get('.collapsible-header').contains('All Sectors').click()
      cy.get('li.active > .collapsible-body').contains(sectors.name).invoke("removeAttr", "target").click()
      cy.origin(sectors.website, { args: { text: sectors.text } }, (args) => {
        const { text } = args;
        cy.get('body > section.banner_home > .container > .row > div.col.xl5.s12 > h1').should("have.text", text)
      })
    })
  })
})
