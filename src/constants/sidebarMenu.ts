interface SidebarInterface {
  ALL_SHOP: string;
  ADD_SHOP: string;
  MANAGE_REVIEW: string;
  DASHBOARD: string;
  LOGOUT: string;
  [prop: string]: any;
}

export const SIDE_BAR_MENU: SidebarInterface = {
  ALL_SHOP: 'All Shop',
  ADD_SHOP: 'Add Shop',
  MANAGE_REVIEW: 'Manage Review',
  DASHBOARD: 'Dashboard',
  LOGOUT: 'Logout',
};

export const SIDE_BAR_ICON: SidebarInterface = {
  ALL_SHOP: require('@assets/shopIcon2.svg'),
  ADD_SHOP: require('@assets/addShopIcon2.svg'),
  MANAGE_REVIEW: require('@assets/manageReviewIcon2.svg'),
  DASHBOARD: require('@assets/dashboardIcon2.svg'),
  LOGOUT: require('@assets/logoutIcon2.svg'),
};
