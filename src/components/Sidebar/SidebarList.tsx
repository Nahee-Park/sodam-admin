import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentMenu } from '@states';
import MenuBtn from './MenuBtn';

const sidebarMenuList = ['DASHBOARD', 'ALL_SHOP', 'ADD_SHOP', 'MANAGE_REVIEW'];

const SidebarList = () => {
  const [currentMenuState, setCurrentMenuState] = useRecoilState<string>(currentMenu);
  const navigate = useNavigate();
  const onClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const menuId = e.currentTarget.id;
    switch (menuId) {
      case 'DASHBOARD':
        navigate('/');
        break;
      case 'ALL_SHOP':
        navigate('/shop');
        break;
      case 'ADD_SHOP':
        navigate('/shop/new');
        break;
      case 'MANAGE_REVIEW':
        navigate('/review');
        break;
    }
    setCurrentMenuState(menuId);
  };
  return (
    <>
      {sidebarMenuList.map((menuKey) => {
        return (
          <MenuBtn
            menuKey={menuKey}
            id={menuKey}
            onClick={onClickHandler}
            isClicked={menuKey === currentMenuState}
            isSidebar={true}
          />
        );
      })}
    </>
  );
};

export default SidebarList;
