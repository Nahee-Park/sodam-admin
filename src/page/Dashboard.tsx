import React, { Suspense, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useSidebar } from '@states';
import { useSetRecoilState } from 'recoil';
import useRefreshLogin from '@hooks/useRefreshLogin';
import useShopAnalyzeData from '@hooks/useShopAnalyzeData';
import DashboardSection from '@components/DashboardSection';
import ErrorAlert from '@components/common/ErrorAlert';
import ErrorBoundary from '@components/common/ErrorBoundary';
import Loading from '@components/common/Loading';

function Dashboard() {
  const setUseSidebar = useSetRecoilState(useSidebar);
  // useRefreshLogin();
  // useShopAnalyzeData();
  useEffect(() => {
    setUseSidebar(true);
  }, []);
  return (
    <>
      <Styled.HeadingWrapper>
        <Heading>DASH BOARD</Heading>
      </Styled.HeadingWrapper>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary renderFallback={({ error }) => <ErrorAlert error={error} />}>
          <DashboardSection />
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default Dashboard;

const Heading = styled.h1`
  ${tw`font-bold text-4xl text-[#ABACFE]`}
`;

const Styled = {
  HeadingWrapper: styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-start;
  `,
};
