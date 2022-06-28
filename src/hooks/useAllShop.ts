import { useQuery } from 'react-query';
import { ShopDataApi } from '@api/ShopDataApi';
import { getAllShopProps } from '@types';

const useAllShop = ({ sort, page, limit }: getAllShopProps) => {
  console.log('>>훅으로 들어온 값', sort, page, limit);
  return useQuery(
    ['getAllShop', { sort, page, limit }],
    () => ShopDataApi.getAllShop({ sort, page, limit }),
    {
      select: (data) => data.data,
      suspense: true,
    },
  );
};

export default useAllShop;
