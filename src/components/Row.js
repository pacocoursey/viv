const { html, Component } = require('htm/preact');
const Checkbox = require('./Checkbox').default;
const Dropdown = require('./Dropdown').default;
const Input = require('./Input').default;

const options = [
  'click',
  'right click',
  'left',
  'right',
  'up',
  'down',
];

class Row extends Component {
  constructor() {
    super();

    this.state = {
      choice: options[0],
    };
  }

  handleChange(e) {
    if (e.target.value) {
      this.setState({
        choice: e.target.value,
      });
    }
  }

  render() {
    const { name } = this.props;
    const { choice } = this.state;

    return html`
      <div class="row">
        <${Checkbox}
          onchange=${() => { console.log('eee'); }}
          checked
        />
        <div>${name}</div>
        <${Dropdown}
          options=${options}
          onchange=${e => this.handleChange(e)}
        />
        ${choice === 'click' || choice === 'right click' ? html`<${Input} hide />` : html`<${Input} />`}
      </div>
    `;
  }
}

module.exports.default = Row;
