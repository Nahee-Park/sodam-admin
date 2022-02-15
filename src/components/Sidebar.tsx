import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SIDE_BAR_MENU, SIDE_BAR_ICON } from '@constants/sidebarMenu';

const sidebarMenuList = ['DASHBOARD', 'ALL_SHOP', 'ADD_SHOP', 'MANAGE_REVIEW'];

const SidebarList = () => {
  return (
    <>
      {sidebarMenuList.map((menuKey) => {
        return (
          <SidebarMenuItem>
            <img src={SIDE_BAR_ICON[menuKey]} alt="menuIcon" className="menuIcon" id={menuKey} />
            <h3 className="menuText" id={menuKey}>
              {SIDE_BAR_MENU[menuKey]}
            </h3>
          </SidebarMenuItem>
        );
      })}
    </>
  );
};
function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarTitle src={require('@assets/sodamMenuTitle.svg')} />
      <SidebarList />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.section`
  ${tw`w-72 flex flex-col`}
`;

const SidebarTitle = styled.img`
  ${tw`w-48 mx-10 my-6`}
`;

const SidebarMenuItem = styled.li`
  ${tw`list-none	flex items-center cursor-pointer h-9  ml-12 mt-4`}
  .menuIcon {
    ${tw`mr-5 w-4 h-4`}
  }
  .menuText {
    ${tw`text-gray-400`}
  }
`;
