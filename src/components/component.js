import Nav from "./nav/index"

const ComponentLibrary = {
  nav : Nav,
};

class Component {
  constructor(renderContext, data) { 
    this.renderContext = renderContext;
    this.data = data;
  }
  
  render() {
    throw "Unimplemented Function Error" 
  }
  
  static getComponentInstance(componentName) {
    const Klass = ComponentLibrary[componentName];
    if (Klass) {
      return new Klass();
    }
    throw new Error(`couldn't find component named: ${componentName}`)
  }
}

module.exports = Component;