import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const template = fs.readFileSync( path.resolve(__dirname, './index.ejs'), 'utf8');

// TODO Figure out why the folowing 
// export default class RelatedList extends Component {
// throws TypeError: Super expression must either be null or a function

export default class RelatedList {
  constructor(renderContext) { 
    this.renderContext = renderContext;
  }
  
  render(opts={}) {
    const headlineLevel = opts.headlineLevel || 'h3';
    return ejs.render(template, _.merge(this.renderContext, {
      headlineLevelStart: () => { return `<${headlineLevel} class="entry-list-item-head">`},
      headlineLevelEnd: () => { return `</${headlineLevel} >`}
    }), {});
  }
}