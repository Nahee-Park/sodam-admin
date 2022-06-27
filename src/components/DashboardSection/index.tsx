import useRefreshLogin from '@hooks/useRefreshLogin';
import useShopAnalyzeData from '@hooks/useShopAnalyzeData';
import React from 'react';

function DashboardSection() {
  useRefreshLogin();
  const allAnalyzData = useShopAnalyzeData();
  console.log('allAnalyzData', allAnalyzData);
  return <div>대시보드</div>;
}

export default DashboardSection;
