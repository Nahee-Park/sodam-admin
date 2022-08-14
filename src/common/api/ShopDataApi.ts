import axios from 'axios';
import { AbstractApi, CommonResponse } from './AbstractApi';
import { getAllShopProps, shopFormProps } from '@types';

const ADMIN_URL = 'https://server.sodam.me/admin/shop';

interface AllShopListResponse extends CommonResponse {
  data?: [
    {
      shopId: number;
      shopName: string;
      image: Array<string>;
      category: Array<string>;
    },
  ];
}

export interface AnalyzeDataObj {
  name: string;
  count: number;
}

interface ShopAnalyzeDataResponse extends CommonResponse {
  data?: {
    allShopCount: Array<AnalyzeDataObj>;
    allReviewCount: Array<AnalyzeDataObj>;
    shopCategoryCount: Array<AnalyzeDataObj>;
    shopThemeCount: Array<AnalyzeDataObj>;
    shopAreaCount: Array<AnalyzeDataObj>;
  };
}

export class ShopDataApi extends AbstractApi {
  public static async getAllShop({ sort, page, limit }: getAllShopProps) {
    const accesstoken = window.localStorage.getItem('accesstoken') as string;
    const URL = ADMIN_URL + this.buildPath('all') + this.buildQuery({ sort, page, limit });
    const response = await axios.get<AllShopListResponse>(URL, {
      headers: {
        accesstoken,
      },
    });
    return response.data;
  }

  public static async getShopAnalyzeData(): Promise<ShopAnalyzeDataResponse> {
    const accesstoken = window.localStorage.getItem('accesstoken') as string;
    const URL = ADMIN_URL + this.buildPath('data');
    const response = await axios.get<ShopAnalyzeDataResponse>(URL, {
      headers: {
        accesstoken,
      },
    });
    return response.data;
  }

  public static async postShopData(shopDataList: Array<any>): Promise<CommonResponse> {
    const accesstoken = window.localStorage.getItem('accesstoken') as string;
    // const URL = ADMIN_URL + this.buildPath('newshop');
    const URL = 'http://localhost:8080/admin/shop/newshop';
    const formData = new FormData();
    Object.entries(shopDataList).forEach(([key, val]) => {
      if (Array.isArray(val)) {
        if (val.every((v) => v instanceof File)) {
          console.log('>>>>>>>val', val);
          val.forEach((file) => formData.append('image', file));
        } else {
          formData.append(key, JSON.stringify(val));
        }
      } else formData.append(key, val);
    });
    console.log('>>formData', formData);
    const response = await axios.post<ShopAnalyzeDataResponse>(URL, {
      headers: {
        accesstoken,
      },
      body: formData,
    });
    console.log('>>response', response);
    return response.data;
  }
}
