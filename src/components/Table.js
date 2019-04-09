const { html } = require('htm/preact');
const Row = require('./Row').default;

const Table = ({ items, removeRow }) => html`
  <table>
    <thead>
      <tr>
        <th>Active</th>
        <th>Name</th>
        <th>Action</th>
        <th>Value</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      ${Object.keys(items).map(key => html`
        <${Row}
          name=${items[key].name || key}
          key=${key}
          name=${items[key].name || key}
          onremove=${() => { removeRow(key); }}
        />
      `)}
    </tbody>
  </table>
`;

module.exports.default = Table;
