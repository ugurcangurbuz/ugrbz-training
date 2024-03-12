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

    it('Check Contact Us Form', () => {
        cy.visit('https://thetraininghub.com')
        cy.get('.collapsible-header').contains('Communications').click()
        cy.get('li.active > .collapsible-body').contains('Contact Us').click()
        cy.get('.title2').should("have.text", 'Contact Us')
        cy.get('#contact_form_company_name').type('Centronit Test Company')
        cy.get('#contact_form_user_name').type('Centronit Test Username')
        cy.get('#contact_form_fname').type('Test Firstname')
        cy.get('#contact_form_lname').type('Test Lastname')
        cy.get('#contact_form_contact_number').type('00000000')
        cy.get('#contact_form_email').type('testmail@centronit.com')
        cy.get('#contact_form_overview').type('Test Further Information')
    })


})
