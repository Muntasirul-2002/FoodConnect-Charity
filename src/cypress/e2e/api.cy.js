describe("Login API", () => {
    const loginEndpoint = "/api/v1/auth/login"; 
  
    it("should return success for valid credentials", () => {
      cy.request({
        method: "POST",
        url: loginEndpoint,
        body: {
          email: "muntasirul@gmail.com",
          password: "123456",
          role: "hostel",
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("success", true);
        expect(response.body).to.have.property("token").and.to.not.be.null;
        expect(response.body.user).to.have.property("email", "muntasirul@gmail.com");
      });
    });
  
    it("should return error for invalid credentials", () => {
      cy.request({
        method: "POST",
        url: loginEndpoint,
        failOnStatusCode: false,
        body: {
          email: "wrong@example.com",
          password: "wrongpassword",
          role: "admin",
        },
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body).to.have.property("success", false);
        expect(response.body).to.have.property("message", "Invalid Credentials");
      });
    });
  
    it("should return error for missing email or password", () => {
      cy.request({
        method: "POST",
        url: loginEndpoint,
        failOnStatusCode: false,
        body: {
          email: "",
          password: "",
          role: "admin",
        },
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property("success", false);
      });
    });
  
    it("should return error for unauthorized role", () => {
      cy.request({
        method: "POST",
        url: loginEndpoint,
        failOnStatusCode: false,
        body: {
          email: "user@example.com",
          password: "password123",
          role: "invalidRole", // Invalid role
        },
      }).then((response) => {
        expect(response.status).to.eq(403);
        expect(response.body).to.have.property("success", false);
        expect(response.body).to.have.property("message", "Unauthorized role");
      });
    });
  });
  