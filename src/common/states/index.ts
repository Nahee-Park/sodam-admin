import { atom } from 'recoil';

export const currentMenu = atom({
  key: 'currentMenu',
  default: 'DASHBOARD',
});

export const useSidebar = atom({
  key: 'useSidebar',
  default: true,
});

export const allShopQuery = atom({
  key: 'allShopQuery',
  default: {
    sort: 'alphabet',
    page: 1,
    limit: 400,
  },
});
