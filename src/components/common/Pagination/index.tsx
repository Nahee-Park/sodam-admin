import { Pagination, StyledEngineProvider } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

function CustomPagination() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Styled.Root>
      <Pagination count={10} page={page} onChange={handleChange} />
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
