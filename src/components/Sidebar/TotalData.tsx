import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const TotalData = () => {
  return (
    <TotalDataWrapper>
      <DataTitle>Total Data</DataTitle>
      <DataContentsBox>
        <DataContents>shop total: 443</DataContents>
        <DataContents>review total: 13</DataContents>
      </DataContentsBox>
    </TotalDataWrapper>
  );
};

export default TotalData;

const TotalDataWrapper = styled.section`
  ${tw`w-min ml-6 mt-[210%]`}
`;
const DataTitle = styled.h1`
  ${tw`m-0 text-[#ABACFE] text-2xl relative top-4 left-3`}
`;
const DataContentsBox = styled.div`
  ${tw`m-0 text-gray-400 bg-[#F7F6FC] w-56 h-20 pl-4 rounded-lg flex flex-col justify-center items-start`}
`;

const DataContents = styled.p`
  ${tw`mx-0 mb-0 mt-1`}
`;
