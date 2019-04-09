const { html, Component } = require('htm/preact');
const Checkbox = require('./Checkbox').default;
const Dropdown = require('./Dropdown').default;
const Input = require('./Input').default;
const Keyboard = require('./Keyboard').default;
const X = require('./icons/X').default;

const options = [
  'click',
  'right click',
  'left',
  'right',
  'up',
  'down',
];

class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active || true,
      name: this.props.name || '',
      action: this.props.action || options[0],
      value: this.props.value || null,
      shortcut: this.props.shortcut || {},
    };
  }

  handleChange(e) {
    if (e.target.value) {
      this.setState({
        action: e.target.value,
      }, () => {
        this.props.onupdate(this.state);
      });
    }
  }

  toggleActive() {
    this.setState(prevState => ({
      active: !prevState.active,
    }), () => {
      this.props.onupdate(this.state);
    });
  }

  handleValue(e) {
    const { value } = e.target;

    this.setState({
      value,
    }, () => {
      this.props.onupdate(this.state);
    });
  }

  handleShortcut(shortcut) {
    this.setState({
      shortcut,
    }, () => {
      this.props.onupdate(this.state);
    });
  }

  render() {
    const {
      key, onremove,
    } = this.props;

    const {
      active, name, action, value, shortcut,
    } = this.state;

    return html`
      <tr class="row">
        <td>
          <${Checkbox}
            onchange=${() => { this.toggleActive(); }}
            id=${key}
            checked="${active === true}"
          />
        </td>

        <td>
          <div>
            ${name}
          </div>
        </td>

        <td>
          <${Dropdown}
            options=${options}
            value=${action}
            onchange=${e => this.handleChange(e)}
          />
        </td>

        <td>
          ${
            action === 'click' || action === 'right click'
              ? html`<${Input} hide />`
              : html`<${Input}
                value=${value}
                onchange=${(v) => { this.handleValue(v); }}
              />`
          }
        </td>

        <td>
          <${Keyboard}
            value=${shortcut}
            onchange=${(o) => { this.handleShortcut(o); }}
          />
        </td>

        <td>
          <button
            class="remove"
            onclick=${onremove}
          >
            <${X} />
          </button>
        </td>
      </tr>
    `;
  }
}

module.exports.default = Row;
