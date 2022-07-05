import CheckTable from '@components/common/CheckTable';
import ErrorAlert from '@components/common/ErrorAlert';
import ErrorBoundary from '@components/common/ErrorBoundary';
import Loading from '@components/common/Loading';
import useRefreshLogin from '@hooks/useRefreshLogin';
import React, { Suspense } from 'react';

function ManageReview() {
  useRefreshLogin();
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary renderFallback={({ error }) => <ErrorAlert error={error} />}>
        <CheckTable />
      </ErrorBoundary>
    </Suspense>
  );
}

export default ManageReview;
