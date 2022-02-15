import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import MenuBtn from './MenuBtn';
import SidebarList from './SidebarList';
import TotalData from './TotalData';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarTitle src={require('@assets/sodamMenuTitle.svg')} />
      <SidebarList />
      <TotalData />
      <MenuBtn menuKey="LOGOUT" />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.aside`
  ${tw`w-72 flex flex-col`}
`;
const SidebarTitle = styled.img`
  ${tw`w-48 mx-10 my-6`}
`;
