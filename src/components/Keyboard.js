const { Component, html } = require('htm/preact');

class Keyboard extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.value || {
      metaKey: false,
      altKey: false,
      ctrlKey: false,
      shiftKey: false,
      character: '',
    };
  }

  handleKeyDown(e) {
    // Tab
    if (e.which === 9) {
      return;
    }

    e.preventDefault();

    const { metaKey, altKey, ctrlKey, shiftKey } = e;

    const INVALID_KEYS = [17, 16, 91, 8, 18];

    const character = INVALID_KEYS.includes(e.which) ? '' : String.fromCharCode(e.which);

    this.setState({
      metaKey,
      altKey,
      ctrlKey,
      shiftKey,
      character,
    });
  }

  isValid() {
    const { character } = this.state;

    if (character.length === 0) {
      return false;
    }

    return true;
  }

  isEmpty() {
    const {
      metaKey, altKey, ctrlKey, shiftKey, character,
    } = this.state;

    return ![metaKey, altKey, ctrlKey, shiftKey, character].some(Boolean);
  }

  store(e) {
    // Tab
    if (e.which === 9) {
      return;
    }

    if (this.isValid()) {
      const { onchange } = this.props;

      if (onchange) {
        onchange(this.state);
      }
    } else {
      console.log('Yeah thats not valid.');
    }
  }

  renderKeys() {
    const {
      metaKey, altKey, ctrlKey, shiftKey, character,
    } = this.state;

    const keys = [
      metaKey && '⌘',
      altKey && '⌥',
      ctrlKey && '⌃',
      shiftKey && '⇧',
      character,
    ].filter(Boolean);

    return keys.join('');
  }

  clear() {
    this.setState({
      metaKey: false,
      altKey: false,
      ctrlKey: false,
      shiftKey: false,
      character: '',
    });

    if (this.props.onchange) {
      this.props.onchange(this.state);
    }
  }

  handleBlur() {
    if (!this.isValid()) {
      this.clear();
    }
  }

  render() {
    return html`
      <div className="shortcut-input">
        <div>
          <input
            onkeyup=${(e) => { this.store(e); }}
            onkeydown=${(e) => { this.handleKeyDown(e); }}
            onblur=${() => { this.handleBlur(); }}
            value=${this.renderKeys()}
          />
        </div>
        <button
          type="button"
          onclick=${() => { this.clear(); }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

    `;
  }
}

module.exports.default = Keyboard;
