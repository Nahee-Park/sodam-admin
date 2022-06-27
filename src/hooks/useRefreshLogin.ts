import React, { useEffect } from 'react';
import { LoginApi } from '@api/LoginPostApi';
import { useRecoilState } from 'recoil';
import { userInfo } from '@states';
import { useNavigate } from 'react-router-dom';

const useRefreshLogin = () => {
  const [userInformation, setUserInformation] = useRecoilState(userInfo);
  const navigate = useNavigate();
  const postLogin = async () => {
    if (userInformation.email === '' || userInformation.password === '') {
      navigate('/login');
      return;
    }
    const response = await LoginApi.postLogin({
      email: userInformation.email,
      password: userInformation.password,
    });
    if (response?.data?.accesstoken) {
      window.localStorage.setItem('accesstoken', response.data.accesstoken);
    }
    return response?.data?.accesstoken;
  };
  useEffect(() => {
    postLogin();
  }, []);
};

export default useRefreshLogin;
