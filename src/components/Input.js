const { html } = require('htm/preact');

const Input = ({
  value, hide, onchange, placeholder, max,
}) => html`
  <div class="input-text" disabled="${hide === true}">
    <input
      type="text"
      maxlength="${max}"
      value="${value}"
      disabled="${hide === true}"
      onchange=${onchange}
    />
    ${placeholder ? html`<span>${placeholder}</span>` : ''}
  </div>
`;

module.exports.default = Input;
