describe("Login Page", () => {
    beforeEach(() => {
      cy.visit("/login"); // Visit the login page before each test
    });
  
    it("should display the login form correctly", () => {
      cy.get("h2.form-title").should("exist"); // Ensure form title exists
      cy.get(".input-field").should("have.length", 2); // Check for email & password fields
      cy.get(".login-button").should("exist").and("contain", "Login"); // Ensure login button exists
    });
  
    it("should allow user to type email and password", () => {
      cy.get('input[type="email"]').type("muntasirul@gmail.com").should("have.value", "muntasirul@gmail.com");
      cy.get('input[type="password"]').type("123456").should("have.value", "123456");
    });
  
    it("should show an error for invalid login credentials", () => {
      cy.get('input[type="email"]').type("wrong@example.com");
      cy.get('input[type="password"]').type("wrongpassword");
      cy.get(".login-button").click();
  
      cy.contains("Invalid Credentials").should("be.visible"); // Check for toast error message
    });
  
    it("should log in successfully with valid credentials", () => {
      cy.get('input[type="email"]').type("admin@example.com");
      cy.get('input[type="password"]').type("admin123");
      cy.get(".login-button").click();
  
      cy.url().should("eq", `${Cypress.config("baseUrl")}/`); // Ensure redirect after login
    });
  
    it("should navigate to forgot password and signup pages", () => {
      cy.get('.forgot-pass-link').contains("Forgot Password?").click();
      cy.url().should("include", "/reset-password");
  
      cy.visit("/login"); // Go back to login page
      cy.get('.forgot-pass-link').contains("Signup").click();
      cy.url().should("include", "/signup");
    });
  });
  