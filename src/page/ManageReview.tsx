import CheckTable from '@components/common/CheckTable';
import useRefreshLogin from '@hooks/useRefreshLogin';
import React from 'react';

function ManageReview() {
  useRefreshLogin();
  return <CheckTable />;
}

export default ManageReview;
