import axios from "axios";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Access-Control-Allow_Credntials'] = true;
    if (getCookie('token')) {
      config.headers['Authorization'] = `Bearer ${getCookie('token')}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if ( process.env.NEXT_PUBLIC_MODE !='production' ) {
      console.error(error);
    }
    const { response } = error;
    const router = useRouter();
    switch(response.status) {
      case 401:
        console.error(`다시 로그인해주세요`);
        break;
      case 500:
        console.error(`서버 처리 중 오류가 발생하였습니다`);
        break;
    }
    return Promise.reject(error);
  }

);

export default axios;