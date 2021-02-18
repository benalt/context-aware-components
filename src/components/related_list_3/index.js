import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import subList from '../unstyled_entry_list';

const template = fs.readFileSync( path.resolve(__dirname, './index.ejs'), 'utf8');

// TODO Figure out why the folowing 
// export default class RelatedList extends Component {
// throws TypeError: Super expression must either be null or a function

export default class RelatedList {
  constructor(renderContext, data) { 
    this.renderContext = renderContext;
  }
  
  render() {
    let list = new subList(this.renderContext);
    return ejs.render(template, _.merge( this.renderContext.data, { list : list }), {});
  }
}