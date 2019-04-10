const { html } = require('htm/preact');
const Checkbox = require('./Checkbox').default;

const Table = ({ toggle, checked, children }) => html`
  <table>
    <thead>
      <tr>
        <th>
          <${Checkbox}
            onchange=${() => { toggle(); }}
            checked="${checked === true}"
          />
        </th>
        <th>Name</th>
        <th>Action</th>
        <th>Value</th>
        <th>Shortcut</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${children}
    </tbody>
  </table>
`;

module.exports.default = Table;
