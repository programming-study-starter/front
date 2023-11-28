import axios from "axios";
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

// const getFetcher = (url:string) => axios.get(url).then(res => res.data);
// const postFetcher = (url:string, params:{[key:string]: any}) => axios.post(url, params).then(res => res.data);
// const patchFetcher = (url:string, params:{[key:string]: any}) => axios.patch(url, params).then(res => res.data);
// const putFetcher = (url:string, params:{[key:string]: any}) => axios.put(url, params).then(res => res.data);
// const deleteFetcher = (url:string) => axios.delete(url).then(res => res.data);

export default axios;

// export {
//   axios,
//   getFetcher,
//   postFetcher,
//   patchFetcher,
//   putFetcher,
//   deleteFetcher,
// };
