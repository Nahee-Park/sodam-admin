import Sidebar from '@components/Sidebar';
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import useRefreshLogin from '@hooks/useRefreshLogin';
function ShopDetail() {
  useRefreshLogin();
  return (
    <>
      <div>ShopDetail</div>
    </>
  );
}

export default ShopDetail;
const Styled = {};
