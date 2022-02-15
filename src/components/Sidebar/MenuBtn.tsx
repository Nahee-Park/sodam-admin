import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { SIDE_BAR_MENU, SIDE_BAR_ICON } from '@constants/sidebarMenu';

interface MenuBtnStyledProps {
  isClicked: boolean | undefined;
  isSidebar: boolean | undefined;
}
interface mySongItemProps extends MenuBtnStyledProps {
  menuKey: string;
  id: string;
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const MenuBtn = ({
  menuKey,
  id,
  onClick,
  isClicked = false,
  isSidebar = false,
}: mySongItemProps) => {
  return (
    <MenuBtnWrapper id={id} onClick={onClick} isClicked={isClicked} isSidebar={isSidebar}>
      <MenuIcon src={SIDE_BAR_ICON[menuKey]} alt="menuIcon" />
      <MenuText>{SIDE_BAR_MENU[menuKey]}</MenuText>
    </MenuBtnWrapper>
  );
};

export default MenuBtn;

// TODO 왜 border tw style 안 먹는지 좀 더 찾아보기
const MenuBtnWrapper = styled.li<MenuBtnStyledProps>`
  ${tw`list-none flex items-center cursor-pointer h-9 pl-12 py-2`}
  ${({ isClicked }) => isClicked && tw`bg-purple-50 border-r-4 border-indigo-500 `}
  ${({ isClicked }) =>
    isClicked &&
    css`
      border-right: 0.125rem solid #b2afd3;
    `}
  ${({ isSidebar, isClicked }) => isSidebar && !isClicked && tw`hover:bg-gray-50`}
`;

const MenuIcon = styled.img`
  ${tw`mr-5 w-4 h-4`}
`;
const MenuText = styled.h3`
  ${tw`text-gray-400`}
`;
