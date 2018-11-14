import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 16px;
  height: 2rem;
  width: 100px;
  line-height: 1.5rem;

  padding: 5px 10px;

  outline: none;
  border-radius: 3px;
  border: 1px solid #e9ecef;

  :focus {
    border: 1px solid #212529;
    box-shadow: 0 0 5px 1px rgba(33, 37, 41, 0.1);
  }
`;

class KbdInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      metaKey: this.props.metaKey || false,
      altKey: this.props.altKey || false,
      ctrlKey: this.props.ctrlKey || false,
      shiftKey: this.props.shiftKey || false,
      character: this.props.character || '',
    };
  }

  handleKeyDown(e) {
    const {
      metaKey,
      altKey,
      ctrlKey,
      shiftKey,
    } = e;

    const character = [17, 16, 91, 8, 18].includes(e.which) ? '' : String.fromCharCode(e.which);

    this.setState({
      metaKey,
      altKey,
      ctrlKey,
      shiftKey,
      character,
    });
  }

  renderKeys() {
    const {
      metaKey,
      altKey,
      ctrlKey,
      shiftKey,
      character,
    } = this.state;

    const keys = [
      metaKey && '⌘',
      altKey && '⌥',
      ctrlKey && '⌃',
      shiftKey && '⇧',
      character,
    ];

    return keys;
  }

  render() {
    return (
      <div>
        <Input
          onChange={e => this.handleKeyDown(e)}
          value={this.renderKeys()}
        />
      </div>
    );
  }
}

export default KbdInput;
