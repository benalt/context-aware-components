import fs from 'fs';
import path from 'path';
import _ from 'lodash'
class DesignSystemTokens {
  constructor(context) {
    this.context = context  
  }
  
  get theme() {
    if (this._theme) {
      return this._theme;
    } 
    const themeFile = `./themes/${ (this.context && this.context.theme) ? this.context.theme : 'default'}.json`;
    let themeJson = JSON.parse(fs.readFileSync( path.resolve(__dirname, themeFile), 'utf8'));

    if (themeJson["@extends"]) {
      const extendedJson = JSON.parse(fs.readFileSync( path.resolve(__dirname, `./themes/${ themeJson["@extends"] }.json` ), 'utf8'));
      themeJson = _.merge(extendedJson, themeJson);
    }

    for (let palette in themeJson) {
      if (["default", "@extends"].indexOf(palette) < 0 ) {
        if (themeJson[palette]["@extends"]) {
          // merge these two objects together, overwriting the defaults
          const extended = themeJson[palette]["@extends"];
          delete themeJson[palette]["@extends"];
          themeJson[palette] = _.merge(_.cloneDeep(themeJson[extended]), themeJson[palette])
        }
      }
    }

    this._theme = themeJson;
    return this._theme;    
  }

  themeToCssVars () {
    let themeCSSVars = [];
    for (let palette in this.theme) {
      if (["default", "@extends"].indexOf(palette) < 0 ) {
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