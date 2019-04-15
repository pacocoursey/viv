const { Component, html } = require('htm/preact');
const X = require('./icons/X').default;

const keyboardToString = (o) => {
  const {
    metaKey, altKey, ctrlKey, shiftKey, character,
  } = o;

  const keys = [
    metaKey && '⌘',
    altKey && '⌥',
    ctrlKey && '⌃',
    shiftKey && '⇧',
    character === 'Enter' ? '↵' : character === ' ' ? '␣' : character,
  ].filter(Boolean);

  return keys.join('');
};

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

    const {
      metaKey, altKey, ctrlKey, shiftKey,
    } = e;

    const INVALID_KEYS = [
      'Meta',
      'Alt',
      'Control',
      'Tab',
      'Shift',
      'Backspace',
    ];

    const character = INVALID_KEYS.includes(e.key) ? '' : e.key;

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
      this.wrapperRef.classList.add('shake');

      setTimeout(() => {
        this.wrapperRef.classList.remove('shake');
      }, 500);
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
      character === 'Enter' ? '↵' : character === ' ' ? '␣' : character,
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
      <div
        className="shortcut-input"
        ref=${(r) => { this.wrapperRef = r; }}
      >
        <input
          onkeyup=${(e) => { this.store(e); }}
          onkeydown=${(e) => { this.handleKeyDown(e); }}
          onblur=${() => { this.handleBlur(); }}
          value=${this.renderKeys()}
        />
        <button
          type="button"
          onclick=${() => { this.clear(); }}
        >
          <${X} />
        </button>
      </div>

    `;
  }
}

module.exports = {
  default: Keyboard,
  keyboardToString,
};
