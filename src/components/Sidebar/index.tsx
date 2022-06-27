import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import MenuBtn from './MenuBtn';
import SidebarList from './SidebarList';
import TotalData from './TotalData';
import { useSetRecoilState } from 'recoil';
import { currentMenu } from '@states';
function Sidebar() {
  const navigate = useNavigate();
  const setCurrentMenuState = useSetRecoilState<string>(currentMenu);
  const handleLogoutClick = () => {
    window.localStorage.removeItem('accessToken');
    navigate('/login');
  };
  const handleTitleClick = () => {
    navigate('/');
    setCurrentMenuState('DASHBOARD');
  };
  return (
    <SidebarContainer>
      <SidebarTitle
        src={require('@assets/sodamMenuTitle.svg')}
        tabIndex={0}
        role="button"
        aria-pressed="false"
        onClick={handleTitleClick}
      />
      <SidebarList />
      <TotalData />
      <MenuBtn menuKey="LOGOUT" onClick={handleLogoutClick} />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.aside`
  ${tw`w-72 flex flex-col`}
`;
const SidebarTitle = styled.img`
  ${tw`w-48 mx-10 my-6`}
  cursor: pointer;
`;
