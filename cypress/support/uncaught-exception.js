  // Hide Uncaught Exceptions
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })