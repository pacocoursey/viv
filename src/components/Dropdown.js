const { html } = require('htm/preact');

const Dropdown = ({
  name, options, onchange, disabled, value,
}) => html`
  <div>
    ${name ? html`<div class="label">${name}</div>` : ''}
    <div class="dropdown" title="${name}">
      <select
        onchange=${onchange}
        disabled="${disabled === true}"
      >
        ${options.map(option => html`
          <option
            value="${option}"
            selected="${value === option}"
          >
            ${option}
          </option>
        `)}
      </select>
    </div>
  </div>
`;

module.exports.default = Dropdown;
