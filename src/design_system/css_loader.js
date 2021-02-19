import fs from 'fs';
import path from 'path';
class CSSLoader {

  constructor(context) {
    this.context = context;
  }

  renderCss(){
    const theme = this.context.theme || "default";
    const csses = [
      fs.readFileSync( path.resolve(__dirname, '../design_system/baseline.css'), 'utf8')
    ];

    for (let i=0; i < this.context.components.length; i++ ) {
      const componentName = this.context.components[i];
      const cssFile = `../components/${componentName}/${theme}.css`;
      
      if (!fs.existsSync(path.resolve(__dirname, cssFile))){
        cssFile = `../components/${componentName}/default.css`
      }
      csses.push(`/* from ${cssFile} */`);
      csses.push(fs.readFileSync( path.resolve(__dirname, cssFile), 'utf8'));
    }
    return csses.join("\n");
  }
}

module.exports = CSSLoader;