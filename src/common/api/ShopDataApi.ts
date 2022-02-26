import axios from 'axios';
import { AbstractApi, CommonResponse } from './AbstractApi';

const ADMIN_URL = 'https://server.sodam.me/admin/shop';

interface AllShopListResponse  extends CommonResponse{
  data?: [
    {
      shopId: number;
      shopName: number;
      image: Array<string>;
      categoryode: Array<string>;
    },
  ];
};

interface AnalyzeDataObj {
  name: string;
  count: number;
}

interface ShopAnalyzeDataResponse  extends CommonResponse{
  data?: {
    allShopCount: Array<AnalyzeDataObj>,
    allReviewCount: Array<AnalyzeDataObj>,
    shopCategoryCount: Array<AnalyzeDataObj>,
    shopThemeCount: Array<AnalyzeDataObj>,
    shopAreaCount: Array<AnalyzeDataObj>
  }
};


export class ShopDataApi extends AbstractApi {
  public static async getAllShop(
    sort: string,
    page: number,
    limit: number,
  ): Promise<AllShopListResponse> {
    const URL =
    ADMIN_URL +
      this.buildPath('all') +
      this.buildQuery({ sort, page, limit });
    const response = await axios.get<AllShopListResponse>(URL);
    return response.data;
  }

  public static async getShopAnalyzeData(): Promise<ShopAnalyzeDataResponse>{
    const URL = ADMIN_URL + this.buildPath('data');
    const response = await axios.get<ShopAnalyzeDataResponse>(URL);
    return response.data; 
  }
}