import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import Component from '../component';

const template = fs.readFileSync( path.resolve(__dirname, './index.ejs'), 'utf8');

// TODO Figure out why the folowing 
// export default class Nav extends Component {
// throws TypeError: Super expression must either be null or a function

export default class Nav {
  constructor(renderContext) {
    this.renderContext = renderContext;
  }
  render() {
    return ejs.render(template, this.renderContext, {});
  }
}