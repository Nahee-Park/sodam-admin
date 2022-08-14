import Sidebar from '@components/Sidebar';
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import useRefreshLogin from '@hooks/useRefreshLogin';
import ShopForm from '@components/ShopForm';
function ShopDetail() {
  useRefreshLogin();
  return (
    <Styled.Root>
      <ShopForm />
    </Styled.Root>
  );
}

export default ShopDetail;
const Styled = {
  Root: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  `,
};
