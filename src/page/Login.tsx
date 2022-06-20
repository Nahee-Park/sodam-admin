import React, { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSidebar } from '@states';
import styled from 'styled-components';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import { useNavigate } from 'react-router-dom';

function Login() {
  const setUseSidebar = useSetRecoilState(useSidebar);
  const loginInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    setUseSidebar(false);
  }, []);

  const handleSubmit = () => {
    navigate('/');
  };

  return (
    <Styled.Root>
      <Styled.Title>Login</Styled.Title>
      <Styled.Form onSubmit={handleSubmit}>
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
    margin-bottom: 16px;
  `,
  Form: styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
      &:first-child {
        margin-bottom: 8px;
      }
    }
    button {
      & {
        margin-top: 16px;
        padding: 8px 10px;
      }
    }
  `,
};
