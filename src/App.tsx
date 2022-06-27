import Sidebar from '@components/Sidebar';
import React from 'react';
import Router from './core/router';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useRecoilValue } from 'recoil';
import { useSidebar } from '@states';

interface mainStyleProps {
  isSidebar: boolean;
}

function App() {
  const isSidebar = useRecoilValue<boolean>(useSidebar);
  return (
    <Styled.Root>
      {isSidebar && <Sidebar />}
      <Styled.Main isSidebar={isSidebar}>
        <Router />
      </Styled.Main>
    </Styled.Root>
  );
}

export default App;

const Styled = {
  Root: styled.div`
    ${tw`flex h-full w-full h-screen`}
  `,
  Main: styled.main<mainStyleProps>`
    ${tw`flex h-full w-full bg-[#F7F8FB] px-24`}
    flex-direction: column;
    margin-left: ${({ isSidebar }) => (isSidebar ? '18rem' : '0rem')};
  `,
};
