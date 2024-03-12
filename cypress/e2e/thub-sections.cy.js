import { hide_req } from '../support/hide-fetch-req.js'
import { uncaught_exceptions } from '../support/uncaught-exception.js'

describe('Check Sections', () => {

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