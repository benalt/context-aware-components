class DesignSystemTokens {
  constructor(context) {
    
  }
  renderPalettes(){
   return "palettes";
  }

  renderModes(){
    return "modes";
  }

  renderTokens(){
    return `${this.renderPalettes()}
${this.renderModes()}`;
  }

}

module.exports = DesignSystemTokens;