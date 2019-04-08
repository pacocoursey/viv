const { Component, render, html } = require('htm/preact');
const Row = require('./components/Row').default;
const Footer = require('./components/Footer').default;

let i = 0;
const uniq = () => `u${i++}`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: {},
    };
  }

  addRow() {
    const key = uniq();

    this.setState(prevState => ({
      list: {
        ...prevState.list,
        [key]: {},
      },
    }));
  }

  removeRow(key) {
    const { list } = this.state;

    delete list[key];

    this.setState({
      list,
    });
  }

  render() {
    const { list } = this.state;

    return html`
      <div class="app">
        <div class="list">
          ${Object.keys(list).map(key => html`
            <${Row}
              name=${list[key].name}
              key=${key}
              name=${key}
              onremove=${() => { this.removeRow(key); }}
            />
          `)}
        </div>

        <${Footer} onclick=${() => { this.addRow(); }} />
      </div>
    `;
  }
}

const container = document.querySelector('.container');
render(html`<${App} />`, container);
