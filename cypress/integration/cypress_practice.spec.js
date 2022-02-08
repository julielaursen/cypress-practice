describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.wait(100)
      cy.visit('http://google.com') // change URL to match your dev URL
      cy.wait(100)
    })
  })