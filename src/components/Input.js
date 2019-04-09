const { html } = require('htm/preact');

const Input = ({ value, hide, onchange }) => html`
  <div class="input-text" disabled="${hide === true}">
    <input
      type="text"
      maxlength="4"
      value="${value}"
      disabled="${hide === true}"
      onchange=${onchange}
    />
    <span>PX</span>
  </div>
`;

module.exports.default = Input;
