const { html } = require('htm/preact');

const Dropdown = ({ name, options }) => {
  console.log('.');

  return html`
  <div>
    ${name ? html`<div class="label">${name}</div>` : ''}
    <div class="content">
      <div class="dropdown" title="${name}">
        <select>
          ${options.map(option => html`
            <option value="${option}">${option}</option>
          `)}
        </select>
      </div>
    </div>
  </div>
  `;
};

module.exports.default = Dropdown;
