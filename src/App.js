const { Component, render, html } = require('htm/preact');
const Checkbox = require('./components/Checkbox').default;
const Dropdown = require('./components/Dropdown').default;

const fonts = [
  'San Francisco',
  'Hack',
  'Arial',
];

class App extends Component {
  handleClick() {
    console.log('wtf');
  }

  render() {
    return html`
      <div>
        <${Checkbox}
          name="Display"
          onChange=${this.handleClick}
        />
        <${Dropdown}
          options=${fonts}
        />
      </div>
    `;
  }
};

const container = document.querySelector('.app');
render(html`<${App} />`, container);
