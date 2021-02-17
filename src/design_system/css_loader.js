import fs from 'fs';
import path from 'path';
class CSSLoader {

  constructor(context) {
    this.context = context;
  }

  renderCss(){
    const theme = this.context.theme || "default";
    const csses = []
    for (let i=0; i < this.context.components.length; i++ ) {
      const componentName = this.context.components[i];
      const cssFile = `../components/${componentName}/${theme}.css`;
      csses.push(`/* from ${cssFile} */`);
      csses.push(fs.readFileSync( path.resolve(__dirname, cssFile), 'utf8'));
    }
    return csses.join("\n");
  }
}

module.exports = CSSLoader;