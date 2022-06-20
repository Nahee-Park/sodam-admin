import React from 'react';
import ShopCard from '@components/common/ShopCard';
import useAllShop from '@hooks/useAllShop';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { allShopQuery } from '@states';

function AllShopGrid() {
  const { sort, page, limit } = useRecoilValue(allShopQuery);
  const allShopData = useAllShop({ sort, page, limit });
  React.useEffect(() => {
    console.log(allShopData.data);
    console.log('sort', sort, page, limit);
  }, [allShopData]);
  return (
    <ShopGrid>
      {allShopData?.data?.map((item) => {
        return (
          <ShopCard
            shopName={item?.shopName}
            image={item?.image[0]}
            category={item?.category.toString()}
          />
        );
      })}
    </ShopGrid>
  );
}

export default AllShopGrid;

const ShopGrid = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 200px);
  height: fit-content;
  column-gap: 25px;
  row-gap: 70px;
`;
