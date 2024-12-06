const { create } = require("express-handlebars");

const hbs = create({ defaultLayout: false });

module.exports = hbs;
