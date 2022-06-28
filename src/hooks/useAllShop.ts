import { useQuery } from 'react-query';
import { ShopDataApi } from '@api/ShopDataApi';
import { getAllShopProps } from '@types';

const useAllShop = ({ sort, page, limit }: getAllShopProps) => {
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
