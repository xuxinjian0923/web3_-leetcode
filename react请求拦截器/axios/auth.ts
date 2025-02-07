import { AxiosError } from 'axios';
import { SIGN_IN } from '#api/users';
import { getCORSResolver } from '#store/resolver';

interface Auth {
  (error: AxiosError): Promise<AxiosError>;

  /**
   * 添加active去标识是否有正在发生中的地址栏重置
   */
  active?: boolean;
  processingToken?: boolean;  // 新增标志位
}

const auth: Auth = (error) => {
  if (error.response?.status === 401 && !auth.active && !auth.processingToken) {
    // 标识已经有地址栏重置发生, 以避免额外的重置
    // 额外的重置虽然并不会导致UI上出错, 但实际控制台上可以观察到产生了冗余的逻辑
    auth.active = true;
    getCORSResolver()
      .then((corsResolver) => corsResolver(SIGN_IN))
      .then(({ origin }) => {
        globalThis.location.replace(origin + SIGN_IN + `?redirect=${encodeURIComponent(location.href)}`);
      });
  }
  return Promise.reject(error);
};

export default auth;
