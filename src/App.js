const { Component, render, html } = require('htm/preact');
const Table = require('./components/Table').default;
const Footer = require('./components/Footer').default;
const Row = require('./components/Row').default;

let i = 0;
const uniq = () => `u${i++}`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      allOn: false,
      list: {
        x0: {
          edit: false,
          name: 'Test',
          action: 'down',
          active: true,
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
    this.setState({ list });
  }

  editRow(key) {
    const { list } = this.state;
    list[key].edit = !list[key].edit;
    this.setState({ list });
  }

  handleChange(key, attr, val) {
    const { list } = this.state;
    list[key][attr] = val;
    this.setState({ list });
  }

  toggleAll() {
    const { allOn, list } = this.state;

    if (allOn) {
      Object.keys(list).forEach((key) => {
        list[key].active = false;
      });
    } else {
      Object.keys(list).forEach((key) => {
        list[key].active = true;
      });
    }

    this.setState({
      allOn: !allOn,
      list,
    });
  }

  render() {
    const { list, allOn } = this.state;

    return html`
      <div class="app">
        <div class="list">
          <${Table}
            checked=${allOn}
            items=${list}
            toggle=${() => { this.toggleAll(); }}
          >
            ${Object.keys(list).map(key => html`
                <${Row}
                  key=${key}

                  data=${list[key]}

                  handleName=${(e) => {
                    this.handleChange(
                      key,
                      'name',
                      e.target.value,
                    );
                  }}

                  handleActive=${() => {
                    this.handleChange(
                      key,
                      'active',
                      !this.state.list[key].active,
                    );
                  }}

                  handleAction=${(e) => {
                    this.handleChange(
                      key,
                      'action',
                      e.target.value,
                    );
                  }}

                  handleValue=${(e) => {
                    this.handleChange(
                      key,
                      'value',
                      e.target.value,
                    );
                  }}

                  handleShortcut=${(o) => {
                    this.handleChange(
                      key,
                      'shortcut',
                      o,
                    );
                  }}

                  onupdate=${(v) => { this.updateRow(key, v); }}
                  onremove=${() => { this.removeRow(key); }}
                  onedit=${() => { this.editRow(key); }}
                />
              `)}
          <//>
        </div>

        <${Footer} onclick=${() => { this.addRow(); }} />
      </div>

    `;
  }
}

const container = document.querySelector('.container');
render(html`<${App} />`, container);
