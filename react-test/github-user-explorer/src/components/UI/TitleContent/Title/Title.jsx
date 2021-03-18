import React from 'react';

import { Wrapper } from './Title.styles';

export default function Title(props) {
  const { children } = props;
  return (
    <Wrapper>
      <span></span>
      {children}
    </Wrapper>
  );
}
