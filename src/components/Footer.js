const { html } = require('htm/preact');
const Keyboard = require('./Keyboard').default;
const Plus = require('./icons/Plus').default;

const Footer = ({ onclick }) => html`
  <footer>
    <button
      class="add"
      onclick=${onclick}}
    >
      <${Plus} />
    </button>

    <div>
      <${Keyboard} />
    </div>
  </footer>
`;

module.exports.default = Footer;
