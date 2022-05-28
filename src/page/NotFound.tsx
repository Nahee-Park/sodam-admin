import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSidebar } from '@states';

function NotFound() {
  const setUseSidebar = useSetRecoilState(useSidebar);
  useEffect(() => {
    setUseSidebar(false);
  }, []);
  return <div>NotFound</div>;
}

export default NotFound;
