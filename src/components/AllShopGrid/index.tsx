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
    console.log('>allShopData?.data', allShopData?.data);
    console.log('sort', sort, page, limit);
  }, []);
  return (
    <ShopGrid>
      {allShopData?.data &&
        allShopData?.data?.map((item) => {
          return (
            <ShopCard
              shopName={item?.shopName}
              image={item?.image && item?.image.length !== 0 ? item?.image[0] : '이미지 없음'}
              category={
                item?.category && item?.category.length !== 0
                  ? item?.category[0]
                  : '카테고리 지정 안됨'
              }
              // category={item?.category[0].toString()}
            />
          );
        })}
    </ShopGrid>
  );
}

export default AllShopGrid;

const ShopGrid = styled.div`
  width: 100%;
  /* display: grid; */
  justify-content: center;
  /* grid-template-columns: repeat(auto-fill, 200px); */
  height: fit-content;
  /* column-gap: 25px; */
  /* row-gap: 70px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px 3px;
`;
