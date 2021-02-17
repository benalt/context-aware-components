const express = require('express');
const router = express.Router();
const Component = require('../components/component');
const DesignSystemTokens = require('../design_system/design_tokens');
const DesignSystemCSSLoader = require('../design_system/css_loader');

/* GET home page. */
router.get('/', function(req, res, next) {
  let context = { 
    id: "index-context",
    components : []
  };

  res.render('index', { 
    title: 'Component Explorer', 
    context: context, 
    renderComponent: ( componentName ) => {
      // track which components are in use
      context.components.push(componentName);
      return Component.getComponentInstance(componentName).render(context);
    },
    renderDesignTokens: () => {
      let tokens = new DesignSystemTokens(context)
      return `/* rendering design tokens for ${ context.id } */
              ${tokens.renderTokens()}`;
    },
    renderStylesheets: () => {
      let cssLoader = new DesignSystemCSSLoader(context);
      return `/* styles for ${ context.components.join(', ')} */ 
              ${cssLoader.renderCss(context)}`;
    }
  });
});

module.exports = router;
