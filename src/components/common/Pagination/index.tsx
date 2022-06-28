import useShopAnalyzeData from '@hooks/useShopAnalyzeData';
import { Pagination, StyledEngineProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { allShopQuery } from '@states';

function CustomPagination() {
  const [page, setPage] = React.useState(1);
  const allAnalyzData = useShopAnalyzeData();
  const [shopQuery, setShopQuery] = useRecoilState(allShopQuery);
  const [pageCount, setPageCount] = useState<number>(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setShopQuery({ ...shopQuery, page: value });
  };

  useEffect(() => {
    allAnalyzData?.data?.allShopCount &&
      setPageCount(Math.ceil(allAnalyzData?.data?.allShopCount[0]?.count / 20));
  }, [allAnalyzData?.data?.allShopCount]);

  return (
    <Styled.Root>
      <Pagination count={pageCount} page={page} onChange={handleChange} />
    </Styled.Root>
  );
}

export default CustomPagination;

const Styled = {
  Root: styled.section`
    margin-top: 2rem;
    margin-bottom: 2rem;
  `,
};
