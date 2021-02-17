const Nav = require('./nav/index');

class Component {
  constructor(renderContext, data) {
    console.log('hello, this is a component')   
  }
  render() {
    throw "Unimplemented Function Error" 
  }
  static getComponentInstance(componentName) {
    //return `hello from getComponentInstance ${componentName}`
    switch (componentName) {
      case "nav" :
        return new Nav();
        break;
      default :
        return `couldn't find ${componentName}`;

    }

  }
}

module.exports = Component;