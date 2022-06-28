import React, { Suspense } from 'react';
import AllShopGrid from '@components/AllShopGrid';
import Loading from '@components/common/Loading';
import ErrorBoundary from '@components/common/ErrorBoundary';
import ErrorAlert from '@components/common/ErrorAlert';
import styled from 'styled-components';
import Dropdown from '@components/common/Dropdown';
import useRefreshLogin from '@hooks/useRefreshLogin';
import CustomPagination from '@components/common/Pagination';

function ShopList() {
  useRefreshLogin();
  return (
    <>
      <DropdownWrapper>
        <Dropdown />
      </DropdownWrapper>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary renderFallback={({ error }) => <ErrorAlert error={error} />}>
          <AllShopGrid />
        </ErrorBoundary>
      </Suspense>
      <CustomPagination />
    </>
  );
}

export default ShopList;

const DropdownWrapper = styled.div`
  /* width: 100%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(1fr, 200px);
  height: fit-content;
  column-gap: 25px;
  row-gap: 70px; */
  width: 95%;
  display: flex;
  justify-content: flex-end;
`;
