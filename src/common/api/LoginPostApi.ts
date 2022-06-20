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
    const URL = ADMIN_URL + this.buildPath('login');
    const response = await axios.get<LoginResponse>(URL);
    return response.data;
  }
}
