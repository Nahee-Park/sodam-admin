import React, { useEffect, useRef, createRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSidebar, userInfo } from '@states';
import styled from 'styled-components';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { LoginApi } from '@api/LoginPostApi';

function Login() {
  const setUseSidebar = useSetRecoilState(useSidebar);
  const loginInput = createRef<HTMLInputElement>();
  const passwordInput = createRef<HTMLInputElement>();
  const navigate = useNavigate();
  const [userInformation, setUserInformation] = useRecoilState(userInfo);

  useEffect(() => {
    setUseSidebar(false);
  }, []);

  const postLogin = async () => {
    const response = await LoginApi.postLogin({
      email: loginInput.current?.value as string,
      password: passwordInput.current?.value as string,
    });
    console.log(response);
    if (response?.data?.accesstoken) {
      setUserInformation({
        email: loginInput.current?.value as string,
        password: passwordInput.current?.value as string,
      });
      window.localStorage.setItem('accesstoken', response.data.accesstoken);
    }
    return response?.data?.accesstoken;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    console.log(loginInput.current?.value);
    console.log(passwordInput.current?.value);
    const data = await postLogin();
    console.log('>>data', data);
    if (data) {
      navigate('/');
    }
  };

  return (
    <Styled.Root>
      <Styled.Title>Login</Styled.Title>
      <Styled.Form onSubmit={handleSubmit}>
        <Input placeholder="id" ref={loginInput} type="text" width="100%" />
        <Input placeholder="password" ref={passwordInput} type="password" width="100%" />
        <Button width="109%" height="35px" onClick={handleSubmit}>
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
    position: fixed;
    bottom: 70px;
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
