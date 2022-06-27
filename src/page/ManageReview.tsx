import useRefreshLogin from '@hooks/useRefreshLogin';
import React from 'react';

function ManageReview() {
  useRefreshLogin();
  return <div>ManageReview</div>;
}

export default ManageReview;
