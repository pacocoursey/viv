import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 14px;
  height: 2rem;
  width: 100px;
  line-height: 1.5rem;

  outline: none;
  border-radius: 3px;
  border: 1px solid #e9ecef;

  padding: 5px 10px;

  :focus {
    border-color: #212529;
    box-shadow: 0 0 5px 1px rgba(33, 37, 41, 0.1);
  }
`;

export default Input;
