import axios from 'axios';
import { AbstractApi, CommonResponse } from './AbstractApi';
import { getAllShopProps } from '@types';

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
    console.log('>>data', response?.data);
    return response.data;
  }
}
