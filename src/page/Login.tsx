import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSidebar } from '@states';

function Login() {
  const setUseSidebar = useSetRecoilState(useSidebar);
  useEffect(() => {
    setUseSidebar(false);
  }, []);
  return <div>Login</div>;
}

export default Login;
