import Sidebar from '@components/Sidebar';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

function Dashboard() {
  return (
    <>
      <Sidebar />
      <Styled.Main>
        <Heading>
          <div className="bg-gray-800">Dashboard</div>
        </Heading>
      </Styled.Main>
    </>
  );
}

export default Dashboard;

const Heading = styled.h1`
  ${tw`font-bold text-4xl text-blue-100`}
`;

const Styled = {
  Main: styled.main`
    ${tw`flex h-full w-full bg-[#F7F8FB] px-24`}
  `,
};
