import { atom } from 'recoil';

export const currentMenu = atom({
  key: 'currentMenu',
  default: 'DASHBOARD',
});
