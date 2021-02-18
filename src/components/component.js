import Nav from "./nav/index"
import RelatedList from "./related_list/index"
import RelatedList2 from "./related_list_2/index"
import RelatedList3 from "./related_list_3/index"

const ComponentLibrary = {
  nav : Nav,
  related_list: RelatedList,
  related_list_2: RelatedList2,
  related_list_3: RelatedList3
};

class Component {
  constructor(renderContext) { 
    this.renderContext = renderContext;
    this.data = data;
    throw "Unimplemented Function Error" 
  }
  
  render() {
    throw "Unimplemented Function Error" 
  }
  
  static getComponentInstance(componentName, renderContext) {
    const Klass = ComponentLibrary[componentName];
    if (Klass) {
      return new Klass(renderContext);
    }
    throw new Error(`couldn't find component named: ${componentName}`)
  }
}

module.exports = Component;