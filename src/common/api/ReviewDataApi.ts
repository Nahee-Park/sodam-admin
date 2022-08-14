import axios from 'axios';
import { AbstractApi, CommonResponse } from './AbstractApi';
import { getAllReviewProps, getAllShopProps } from '@types';

const ADMIN_URL = 'https://server.sodam.me/admin/review';

interface reviewDataObj {
  reviewId: number;
  shopId: number;
  writerTumbnail: string;
  writerName: string;
  likeCount: number;
  scrapCount: number;
  content: string;
  image: Array<string>;
  category: Array<string>;
}
interface AllReviewListResponse extends CommonResponse {
  data?: reviewDataObj[];
}

export class ReviewDataApi extends AbstractApi {
  public static async getAllReview({ sort, page, limit }: getAllReviewProps) {
    const accesstoken = window.localStorage.getItem('accesstoken') as string;
    const URL = ADMIN_URL + this.buildPath('all') + this.buildQuery({ sort, page, limit });
    const response = await axios.get<AllReviewListResponse>(URL, {
      headers: {
        accesstoken,
      },
    });
    return response.data;
  }
}
