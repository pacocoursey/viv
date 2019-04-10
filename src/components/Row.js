const { html } = require('htm/preact');
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

const Row = (props) => {
  const {
    data,
    onremove,
    handleActive,
    handleAction,
    handleValue,
    handleShortcut,
  } = props;

  const {
    active = false,
    name = '',
    action = options[0],
    value = 0,
    shortcut = {},
  } = data;

  return html`
    <tr class="row">
      <td>
        <${Checkbox}
          onchange=${handleActive}
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
          onchange=${handleAction}
        />
      </td>

      <td>
        ${
          action === 'click' || action === 'right click'
            ? html`<${Input} hide />`
            : html`<${Input}
              value=${value}
              onchange=${handleValue}
            />`
        }
      </td>

      <td>
        <${Keyboard}
          value=${shortcut}
          onchange=${handleShortcut}
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
};

module.exports.default = Row;
