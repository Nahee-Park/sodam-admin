import { useQuery } from 'react-query';
import { ReviewDataApi } from '@api/ReviewDataApi';
import { getAllShopProps } from '@types';

const useAllShop = ({ sort, page, limit }: getAllShopProps) => {
  return useQuery(
    ['getAllShop', { sort, page, limit }],
    () => ReviewDataApi.getAllReview({ sort, page, limit }),
    {
      select: (data) => data.data,
      suspense: true,
    },
  );
};

export default useAllShop;
