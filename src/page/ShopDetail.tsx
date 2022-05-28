import Sidebar from '@components/Sidebar';
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
function ShopDetail() {
  return (
    <>
      <Sidebar />
      <Styled.Main>
        <div>ShopDetail</div>
      </Styled.Main>
    </>
  );
}

export default ShopDetail;
const Styled = {
  Main: styled.main`
    ${tw`flex h-full w-full bg-[#F7F8FB] px-24`}
  `,
};
