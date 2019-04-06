const { Component, render, html } = require('htm/preact');
const Checkbox = require('./components/Checkbox');

class App extends Component {
  handleClick() {
    console.log('wtf');
  }

  render() {
    return html`
      <div class="app">
        <h1>SDLFKJSDF</h1>
        <${Checkbox.default}
          name="Display"
          onChange=${this.handleClick}
        />
      </div>
    `;
  }
};

const container = document.querySelector('.app');
render(html`<${App} />`, container);
