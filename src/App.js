const { render, html } = require('htm/preact');
const Row = require('./components/Row').default;

const App = () => html`
  <div class="app">
    <${Row} name="Some Name" />
    <${Row} name="Other Longer Name" />
  </div>
`;

const container = document.querySelector('.container');
render(html`<${App} />`, container);
