import { ShopDataApi } from '@api/ShopDataApi';
import { useMutation, useQueryClient } from 'react-query';

// 해당하는 flag에 대해서만 invalidated 시키도록
const usePostShop = (props: Array<any>) => {
  const queryClient = useQueryClient();

  return useMutation(async () => ShopDataApi.postShopData(props), {
    onMutate: async () => {
      await queryClient.cancelQueries(['getAllShop']);
    },
    onSuccess: () => {},
  });
};

export default usePostShop;
