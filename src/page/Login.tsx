import React, { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSidebar } from '@states';
import styled from 'styled-components';
import Button from '@components/common/Button';
import Input from '@components/common/Input';

function Login() {
  const setUseSidebar = useSetRecoilState(useSidebar);
  const loginInput = useRef();
  const passwordInput = useRef();

  useEffect(() => {
    setUseSidebar(false);
  }, []);

  return (
    <Styled.Root>
      <Styled.Title>Login</Styled.Title>
      <Styled.Form>
        <Input placeholder="id" ref={loginInput} type="text" />
        <Input placeholder="password" ref={passwordInput} type="password" />
        <Button width="109%" height="35px">
          Login
        </Button>
      </Styled.Form>
    </Styled.Root>
  );
}

export default Login;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f7f6fc;
  `,
  Title: styled.h1`
    color: #abacfe;
    margin-bottom: 8px;
  `,
  Form: styled.form`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
      & {
        margin-bottom: 8px;
      }
    }
    button {
      & {
        padding: 8px 10px;
      }
    }
  `,
};
