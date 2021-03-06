import Dashboard from '@page/Dashboard';
import Login from '@page/Login';
import ManageReview from '@page/ManageReview';
import NotFound from '@page/NotFound';
import ShopDetail from '@page/ShopDetail';
import ShopList from '@page/ShopList';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

function Router() {
  const accesstoken = window.localStorage.getItem('accesstoken');
  console.log('>>accesstoken', accesstoken);
  switch (accesstoken) {
    case null:
      return (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      );
    default:
      return (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/shop" element={<ShopList />} />
          <Route path="/shop/new" element={<ShopDetail />} />
          <Route path="/shop/edit" element={<ShopDetail />} />
          <Route path="/review" element={<ManageReview />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      );
  }
}

export default Router;
