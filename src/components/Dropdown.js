const { html } = require('htm/preact');

const Dropdown = ({
  name, options, onchange, disabled,
}) => html`
  <div>
    ${name ? html`<div class="label">${name}</div>` : ''}
    <div class="content">
      <div class="dropdown" title="${name}">
        <select
          onchange=${onchange}
          disabled="${disabled === true}"
        >
          ${options.map(option => html`
            <option value="${option}">${option}</option>
          `)}
        </select>
      </div>
    </div>
  </div>
`;

module.exports.default = Dropdown;
