const { html } = require('htm/preact');

const Input = ({ value, hide }) => html`
  <div class="input-text" disabled="${hide === true}">
    <input
      type="text"
      maxlength="4"
      value="${value}"
      disabled="${hide === true}"
    />
    <span>PX</span>
  </div>
`;

module.exports.default = Input;
