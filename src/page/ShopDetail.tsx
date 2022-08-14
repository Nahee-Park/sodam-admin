import Sidebar from '@components/Sidebar';
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import useRefreshLogin from '@hooks/useRefreshLogin';
import ShopForm from '@components/ShopForm';
function ShopDetail() {
  useRefreshLogin();
  return (
    <>
      <ShopForm />
    </>
  );
}

export default ShopDetail;
const Styled = {};
