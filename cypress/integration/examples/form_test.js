describe("Quotes app", () => {
        beforeEach(() => {
          // arbitrary code we want running before our tests run
          cy.visit("http://localhost:3000");
        });

    const firstNameInput = () => cy.get('input[name="first_name"]');
    const lastNameInput = () => cy.get('input[name="last_name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="pwd"]');
    const checkboxInput = () => cy.get('input[name="tos"]');
    const submitBtn = () => cy.get('button[id="submit"]');

    it("Can type in the inputs", () => {
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

        it("Check to see if a user can submit the form data", () => {
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

            submitBtn().click();

            });

    it("Check for form validation if an input is left empty", () => {
        firstNameInput().clear();
        lastNameInput().clear();
        emailInput().clear();
        passwordInput().clear();
        checkboxInput().should("not.be.checked")
        submitBtn().should("be.disabled");


     });
});
  


