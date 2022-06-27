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
      {isSidebar && (
        <>
          <Sidebar />
          <Styled.Sidebar />
        </>
      )}
      <Styled.Main isSidebar={isSidebar}>
        <Router />
      </Styled.Main>
    </Styled.Root>
  );
}

export default App;

const Styled = {
  Root: styled.div`
    min-height: 100vh;
    ${tw`flex h-full w-full`}
  `,
  Main: styled.main<mainStyleProps>`
    ${tw`flex h-full w-full bg-[#F7F8FB] `}
    flex-direction: column;
    min-height: 100vh;
    /* margin-left: ${({ isSidebar }) => (isSidebar ? '18rem' : '0rem')}; */
    padding: 8px 8px;
    align-items: center;
    /* min-height: 100vh; */
    /* min-height: 100%;
    height: fit-content; */
  `,

  Sidebar: styled.div`
    min-width: 18rem;
  `,
};
