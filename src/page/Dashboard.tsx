import React, { useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useSidebar } from '@states';
import { useSetRecoilState } from 'recoil';

function Dashboard() {
  const setUseSidebar = useSetRecoilState(useSidebar);
  useEffect(() => {
    setUseSidebar(true);
  }, []);
  return (
    <>
      <Heading>
        <div className="bg-gray-800">Dashboard</div>
      </Heading>
    </>
  );
}

export default Dashboard;

const Heading = styled.h1`
  ${tw`font-bold text-4xl text-blue-100`}
`;

const Styled = {};
