import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSidebar } from '@states';
import useRefreshLogin from '@hooks/useRefreshLogin';

function NotFound() {
  useRefreshLogin();
  const setUseSidebar = useSetRecoilState(useSidebar);
  useEffect(() => {
    setUseSidebar(false);
  }, []);
  return <div>NotFound</div>;
}

export default NotFound;
