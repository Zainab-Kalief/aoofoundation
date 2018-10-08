const nodemailer = require("nodemailer");

module.exports = function(app) {
  app.get("/", (request, response) => {
    console.log("~~~~~~~~~~~~~~> AOOF site is live <~~~~~~~~~~~~~~");
    response.render("index");
  });
  
};
