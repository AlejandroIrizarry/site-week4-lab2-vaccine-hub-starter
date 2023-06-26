const { UnathorizedError } = require("../utils/errors");

class User {
  static async login(credentials) {
    // user should submit their emal and password
    ///if any fo these fields ar emissing, throw an error
    ///

    // lookup the user in the db by email
    // if a user is found, compare the submitted password
    // with the password in the db
    // if there is a match, return the user
    ///
    //if na of thsi goes wrong, throw an error
    throw new UnathorizedError("Invalid email/password combo");
  }

  static async register(credentials) {
    // user should submit their email, pw, rsvp status, and # of guests
    // if any of these fields ar emissing, throw an error
    //
    // make sure no user already exists in the system with that email
    // if one does, throw an error
    //
    // take the users password, and hash it
    // take the users email, and lowercase it
    //
    // create a new user in the db with all their info
    // return the user
  }
}

module.exports = User;
