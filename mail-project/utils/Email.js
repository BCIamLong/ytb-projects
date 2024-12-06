const nodemailer = require("nodemailer");
const { convert } = require("html-to-text");
const hbs = require("../config/template");

const user = { name: "user 1" };

class Email {
  async sendEmail() {
    const htmlTemplate = await hbs.render("./views/email.handlebars", {
      user,
    });
    const text = convert(htmlTemplate);

    return this.createTransporter().sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text,
      html: htmlTemplate,
    });
  }
  createTransporter() {
    return nodemailer.createTransport({
      host: "your-host",
      port: 587,
      auth: {
        user: "your-user-name",
        pass: "your-password",
      },
    });
  }
}

module.exports = Email;
