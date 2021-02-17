import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

const template = fs.readFileSync( path.resolve(__dirname, './index.ejs'), 'utf8');

// TODO Figure out why the folowing 
// export default class RelatedList extends Component {
// throws TypeError: Super expression must either be null or a function

export default class RelatedList {
  constructor(renderContext, data) { 
    this.renderContext = renderContext;
    this.data = data;
  }
  
  render(context) {
    return ejs.render(template, context.data, {});
  }
}