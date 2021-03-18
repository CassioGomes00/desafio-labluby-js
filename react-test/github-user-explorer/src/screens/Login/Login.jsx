import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUser } from '../../store/user/User.actions';

import Input from '../../components/Login/Input/Input';
import Button from '../../components/Login/Button/Button';
import Img from '../../components/Login/Img/Img';
import { Wrapper } from './Login.styles';

export default function Login() {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  let user = '';

  const getValue = (value) => {
    user = value;
  };

  const validateInput = () => {};

  return (
    <Wrapper>
      <Img />
      <Input getValue={getValue} />
      <Button>ENTRAR</Button>
    </Wrapper>
  );
}
