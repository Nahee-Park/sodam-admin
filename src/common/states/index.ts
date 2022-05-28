import { atom } from 'recoil';

export const currentMenu = atom({
  key: 'currentMenu',
  default: 'DASHBOARD',
});

export const useSidebar = atom({
  key: 'useSidebar',
  default: true,
});
