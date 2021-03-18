import React from 'react';

import { Wrapper } from './Input.styles';

export default function Input(props) {
  const { getValue } = props;

  const handleTyping = (event) => {
    const { value } = event.target;
    getValue(value);
  };

  const handleEmptyInput = () => {
    getValue('ta vazio');
  };

  return <Wrapper type="text" placeholder="Usuário" onKeyUp={handleTyping} />;
}
