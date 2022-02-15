import Sidebar from '@components/Sidebar';
import React from 'react';
import Router from './core/router';
import styled from 'styled-components';
import tw from 'twin.macro';

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <Main>
        <Router />
      </Main>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  ${tw`flex h-full w-full h-screen`}
`;

const Main = styled.section`
  ${tw`flex h-full w-full bg-[#F7F8FB] px-24`}
`;
