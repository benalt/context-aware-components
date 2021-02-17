import Nav from "./nav/index"
import RelatedList from "./related_list/index"

const ComponentLibrary = {
  nav : Nav,
  related_list: RelatedList
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
    console.log(componentName, Klass);
    if (Klass) {
      return new Klass();
    }
    throw new Error(`couldn't find component named: ${componentName}`)
  }
}

module.exports = Component;