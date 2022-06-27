import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import MenuBtn from './MenuBtn';
import SidebarList from './SidebarList';
import TotalData from './TotalData';

function Sidebar() {
  const navigate = useNavigate();
  const handleClick = () => {
    window.localStorage.removeItem('accessToken');
    navigate('/login');
  };
  return (
    <SidebarContainer>
      <SidebarTitle src={require('@assets/sodamMenuTitle.svg')} />
      <SidebarList />
      <TotalData />
      <MenuBtn menuKey="LOGOUT" onClick={handleClick} />
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
