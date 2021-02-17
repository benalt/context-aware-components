import express from 'express';
import Component from '../components/component';
import DesignSystemTokens from '../design_system/design_tokens';
import DesignSystemCSSLoader from '../design_system/css_loader';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let context = { 
    id: "index-context",
    components : []
  };

  res.render('index', { 
    title: 'Component Explorer', 
    context: context, 
    componentName: req.query.componentName || null,
    componentInstance: req.query.componentInstance || null,
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