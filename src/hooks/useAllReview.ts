import { useQuery } from 'react-query';
import { ReviewDataApi } from '@api/ReviewDataApi';
import { getAllReviewProps } from '@types';

const useAllReview = ({ sort, page, limit }: getAllReviewProps) => {
  return useQuery(
    ['getAllShop', { sort, page, limit }],
    () => ReviewDataApi.getAllReview({ sort, page, limit }),
    {
      select: (data) => data.data,
      suspense: true,
    },
  );
};

export default useAllReview;
