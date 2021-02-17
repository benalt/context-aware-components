const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync( path.resolve(__dirname, './index.ejs'), 'utf8');

Nav = class Nav {
  render(context) {
    return ejs.render(template, context.data, {});
  }
}
module.exports = Nav;
