import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <>
      <CircularProgress />
      <div>로딩중</div>
    </>
  );
}

export default Loading;
