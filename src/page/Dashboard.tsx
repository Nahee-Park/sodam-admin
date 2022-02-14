import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Heading = styled.h1`
  ${tw`font-bold text-4xl text-blue-100`}
`;

function Dashboard() {
  return (
    <Heading>
      <div className="bg-gray-800">Dashboard</div>
    </Heading>
  );
}

export default Dashboard;
