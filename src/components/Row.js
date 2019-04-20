const { html } = require('htm/preact');
const Checkbox = require('./Checkbox').default;
const Dropdown = require('./Dropdown').default;
const Input = require('./Input').default;
const Keyboard = require('./Keyboard').default;
const X = require('./icons/X').default;
const Edit = require('./icons/Edit').default;
const Check = require('./icons/Check').default;

const { keyboardToString } = require('./Keyboard');

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
    onedit,
    onremove,
    handleName,
    handleActive,
    handleAction,
    handleValue,
    handleShortcut,
  } = props;

  const {
    edit = false,
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
          checked="${active}"
        />
      </td>

      <td class="name">
        <div>
          ${edit ? html`
            <${Input}
              value=${name}
              onchange=${handleName}
            />
          ` : html`<div class="text">${name}</div>`}
        </div>
      </td>

      <td>
        ${edit ? html`
          <${Dropdown}
            options=${options}
            value=${action}
            onchange=${handleAction}
          />
        ` : html`<div class="text">${action}</div>`}
      </td>

      <td>
        ${edit ?
          action === 'click' || action === 'right click'
            ? html`<${Input} hide />`
            : html`<${Input}
              value=${value}
              placeholder="PX"
              max="4"
              onchange=${handleValue}
            />`
        : action === 'click' || action === 'right click' ? '' : html`<div class="text">${value} PX</div>`}
      </td>

      <td>
        ${edit ? html`
          <${Keyboard}
            value=${shortcut}
            onchange=${handleShortcut}
          />
        ` : html`<div class="shortcut text">${keyboardToString(shortcut)}</div>`}
      </td>

      <td>
        <button
          class="button"
          title="Remove"
          onclick=${onremove}
        >
          <${X} />
        </button>

        ${edit ? html`
        <button
          class="button"
          title="Save"
          onclick=${onedit}
        >
          <${Check} />
        </button>
        ` : html`
        <button
          class="button"
          title="Edit"
          onclick=${onedit}
        >
          <${Edit} />
        </button>
        `}

      </td>
    </tr>
  `;
};

module.exports.default = Row;
