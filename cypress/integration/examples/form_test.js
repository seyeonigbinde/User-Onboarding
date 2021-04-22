describe("Quotes app", () => {
        beforeEach(() => {
          // arbitrary code we want running before our tests run
          cy.visit("http://localhost:3000");
        });

     it("sanity test to make sure tests work", () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);     
        });

    const firstNameInput = () => cy.get('input[name="first_name"]');
    const lastNameInput = () => cy.get('input[name="last_name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="pwd"]');
    const checkboxInput = () => cy.get('input[name="tos"]');
    // const submitBtn = () => cy.get('button[class="submit"]');

    it("can type in the inputs", () => {
          firstNameInput()
            .should("have.value", "")
            .type("Seye")
            .should("have.value", "Seye");

          lastNameInput()
            .should("have.value", "")
            .type("Onigbinde")
            .should("have.value", "Onigbinde");

         emailInput()
            .should("have.value", "")
            .type("seyeonigbinde@gmail.com")
            .should("have.value", "seyeonigbinde@gmail.com");

         passwordInput()
            .should("have.value", "")
            .type("Nigeria")
            .should("have.value", "Nigeria");

        checkboxInput()
            .should("not.be.checked")
            .check()
            .should("be.checked");


        
        });
});
  







