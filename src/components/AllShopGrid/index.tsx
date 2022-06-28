import React from 'react';
import ShopCard from '@components/common/ShopCard';
import useAllShop from '@hooks/useAllShop';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { allShopQuery } from '@states';
import CustomPagination from '@components/common/Pagination';

function AllShopGrid() {
  const { sort, page, limit } = useRecoilValue(allShopQuery);
  const allShopData = useAllShop({ sort, page, limit });
  React.useEffect(() => {
    console.log('>allShopData?.data', allShopData?.data);
    console.log('sort', sort, page, limit);
  }, []);
  return (
    <ShopGrid>
      {allShopData?.data?.map((item) => {
        return (
          <ShopCard
            shopName={item?.shopName}
            image={
              item?.image && item?.image.length !== 0
                ? item?.image[0]
                : 'https://sodam-bucket-2.s3.ap-northeast-2.amazonaws.com/review/no_image.png'
            }
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

const ShopGrid = styled.section`
  width: 95%;
  /* display: grid; */
  justify-content: center;
  margin-top: 2rem;
  /* grid-template-columns: repeat(auto-fill, 200px); */
  height: fit-content;
  /* column-gap: 25px; */
  /* row-gap: 70px; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-columns: minmax(230px, min-content) repeat(auto-fill, 250px); */
  /* max-width: 1280px; */
  /* min-width: 1140px; */
  gap: 16px 16px;
  & button {
    width: 100%;
  }
`;
