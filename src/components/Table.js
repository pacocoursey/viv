const { html } = require('htm/preact');
const Row = require('./Row').default;

const Table = ({ items, removeRow, updateRow }) => html`
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Action</th>
        <th>Value</th>
        <th>Shortcut</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${Object.keys(items).map((key) => {
        const {
          name, action, value, shortcut,
        } = items[key];

        return html`
          <${Row}
            name=${name || key}
            key=${key}
            name=${name || key}
            action=${action}
            value=${value}
            shortcut=${shortcut}
            onupdate=${(v) => { updateRow(key, v); }}
            onremove=${() => { removeRow(key); }}
          />
        `;
      })}
    </tbody>
  </table>
`;

module.exports.default = Table;
