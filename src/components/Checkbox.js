const { html } = require('htm/preact');

let i = 0;
const uniq = () => `u${i++}`;

const Checkbox = ({ checked, name, onchange }) => {
  let id;
  if (!name) id = uniq();

  return html`
    <div class="checkbox">
      <input
        class="display-checkbox"
        type="checkbox"
        id=${id}
        onchange=${onchange}
        checked="${checked === true}"
      />
      <label for=${id}-c>
        ${name ? html`<span>${name}</span>` : ''}
      </label>
    </div>
  `;
};

module.exports.default = Checkbox;
