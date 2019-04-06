const { html } = require('htm/preact');

const Checkbox = ({ name, onChange }) => html`
  <div class="checkbox">
    <input
      class="display-checkbox"
      type="checkbox"
      id=${name}
      onChange=${onChange}
    />
    <label for=${name}-c>
      <span>${name}</span>
    </label>
  </div>
`;

module.exports.default = Checkbox;
