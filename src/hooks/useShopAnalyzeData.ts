import { useQuery } from 'react-query';
import { ShopDataApi } from '@api/ShopDataApi';

const useShopAnalyzeData = () => {
  return useQuery(['getAllShop'], () => ShopDataApi.getShopAnalyzeData(), {
    select: (data) => data?.data,
    suspense: true,
  });
};

export default useShopAnalyzeData;
