const request = require("supertest");
const server = require("../api/server.js");

const Users = require("../users/users-model");

describe("\n * Auth-router", function() {
  // test the POST for register
  describe("\n * POST /register", function() {
    it("should return new user with text/html", function() {
      return request(server)
        .post("/api/auth/register")
        .then(res => {
          expect(res.type).toMatch("text/html");
        });
    });
  });

  describe("\n * POST /register err", function() {
    it("should not return JSON", function() {
      return request(server)
        .post("/api/auth/register")
        .then(res => {
          expect(res.type).not.toMatch(/json/i);
          // tests the test above...so if you put in text/html this test will fail
        });
    });
    // For this test to work you need to match both UserName and Password, and also make sure to change both
    // each time you test it
    it("should return username registered", function() {
      return Users.add({ username: "ricardo1", password: "ricardo1" }).then(
        res => {
          expect(res.username && res.password).toBe("ricardo1");
        }
      );
    });
  });

  // test the POST for login
  describe("\n * POST /login", function() {
    it("should return JSON", function() {
      return request(server)
        .post("/api/auth/login")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  describe("\n * POST /login err", function() {
    it("should not match text/html", function() {
      return request(server)
        .post("/api/auth/login")
        .then(res => {
          expect(res.type).not.toMatch("text/html");
          // tests the test above...so if you put in /json/i this test will fail
        });
    });
    // To test, change the users id and match the username
    it("should return user that is registered", function() {
      return Users.findById(4).then(res => {
        expect(res.username).toBe("testing");
      });
    });
  });
});
