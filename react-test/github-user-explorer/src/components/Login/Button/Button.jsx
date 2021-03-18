import React from 'react';

import { Wrapper } from './Button.styles';

export default function Button(props) {
  const { showValue, children } = props;

  const handleclick = (event) => {};

  return <Wrapper onClick={handleclick}>{children}</Wrapper>;
}
