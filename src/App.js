const htm = require('htm');
const { Component, render, h } = require('preact');

const html = htm.bind(h);

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    };
  }

  addTodo() {
    const { todos } = this.state;
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }

  render(props, { todos = [] }) {
    return html`
      <div class="app">
        <ul>
          ${todos.map(todo => html`
            <li>${todo}</li>
          `)}
        </ul>
        <button onClick=${() => this.addTodo()}>Add Todo</button>
      </div>
    `;
  }
}

const container = document.querySelector('.app');
render(html`<${App} />`, container);
