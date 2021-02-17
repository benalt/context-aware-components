import fs from 'fs';
import path from 'path';

class DesignSystemTokens {
  constructor(context) {
    this.context = context  
  }
  
  get theme() {
    if (this._theme) {
      return this._theme;
    } 
    const themeFile = `./themes/${ (this.context && this.context.site) ? this.context.site : 'default'}.json`;
    const themeText = fs.readFileSync( path.resolve(__dirname, themeFile), 'utf8');
    this._theme = JSON.parse(themeText);
    return this._theme;    
  }

  themeToCssVars () {
    let themeCSSVars = [];
    for (let palette in this.theme) {
      if (palette !== "default") {
        for (let aspect in this.theme[palette]) {
          themeCSSVars.push(` --${palette}-${aspect} : ${this.theme[palette][aspect]};`);
        }
      }
    }
    return themeCSSVars.join("\n");
  }


  renderTokens(cssSelector=":root"){   
    return `
${cssSelector} {
${this.themeToCssVars()}
}`;
  }

}

module.exports = DesignSystemTokens;