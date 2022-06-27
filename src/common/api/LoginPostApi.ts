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
  public static async postLogin({ email, password }: LoginProps): Promise<LoginResponse> {
    try {
      const URL = ADMIN_URL + this.buildPath('login');
      const response = await axios.post<LoginResponse>(URL, {
        email,
        password,
      });
      return response.data;
    } catch (e) {
      console.log(e);
      alert('이메일과 패스워드를 확인해주세요');
    }
  }
}
