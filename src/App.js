const { Component, render, html } = require('htm/preact');
const Table = require('./components/Table').default;
const Footer = require('./components/Footer').default;

let i = 0;
const uniq = () => `u${i++}`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: {
        x0: {
          name: 'Test',
          action: 'down',
          value: 30,
          shortcut: {
            metaKey: true,
            shiftKey: true,
            character: 'x',
          },
        },
      },
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

  updateRow(key, value) {
    const { list } = this.state;

    list[key] = value;

    this.setState({
      list,
    });

    console.log(this.state);
  }

  render() {
    const { list } = this.state;

    return html`
      <div class="app">
        <div class="list">
          <${Table}
            items=${list}
            removeRow=${(key) => { this.removeRow(key); }}
            updateRow=${(key, value) => { this.updateRow(key, value); }}
          />
        </div>

        <${Footer} onclick=${() => { this.addRow(); }} />
      </div>

    `;
  }
}

const container = document.querySelector('.container');
render(html`<${App} />`, container);
