import Dashboard from '@page/Dashboard';
import ManageReview from '@page/ManageReview';
import ShopDetail from '@page/ShopDetail';
import ShopList from '@page/ShopList';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/shop" element={<ShopList />} />
        <Route path="/shop/new" element={<ShopDetail />} />
        <Route path="/shop/edit" element={<ShopDetail />} />
        <Route path="/review" element={<ManageReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
