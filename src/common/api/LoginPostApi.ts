import axios from 'axios';
import { AbstractApi, CommonResponse } from './AbstractApi';

const ADMIN_URL = 'https://server.sodam.me/admin';

interface LoginResponse extends CommonResponse {
  data?: {
    accesstoken: string;
  };
}

interface LoginProps {
  email: string;
  password: string;
}
export class LoginApi extends AbstractApi {
  public static async postLogin({ email, password }: LoginProps) {
    try {
      const URL = ADMIN_URL + this.buildPath('login');
      const response = await axios.post(URL, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      alert('이메일과 패스워드를 확인해주세요');
      if (axios.isAxiosError(error)) {
        return {
          error: { status: error.response?.status, data: error.response?.data },
        };
      }
      throw new Error('axios 이외의 에러 발생');
    }
  }
}
