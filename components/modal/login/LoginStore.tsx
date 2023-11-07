import { create } from "zustand";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

interface LoginModalType {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
}

const useLoginModalStore = create<LoginModalType>()(
  (set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => {
      set((state) => ({
        isOpen: isOpen
      }));
    },
  })
);

interface LoginDataType {
  token: string | undefined,
  email: string | undefined,
  username: string | undefined,
  nickname: string | undefined,
  mobile: string | undefined,
  gender: string | undefined,
  birthDay: string | undefined,
  zipCode: string | undefined,
  address: string | undefined,
  addressDetail: string | undefined,
}

interface LoginDataStoreType extends LoginDataType {
  setData: (param: LoginDataType | undefined) => void,
}

const useLoginDataSotre = create<LoginDataStoreType>()(
  (set) => ({
    token: undefined,
    email: undefined,
    username: undefined,
    nickname: undefined,
    mobile: undefined,
    gender: undefined,
    birthDay: undefined,
    zipCode: undefined,
    address: undefined,
    addressDetail: undefined,
    setData: (param: LoginDataType | undefined) => {
      set((state) => ({
        token: param?.token,
        email: param?.email,
        username: param?.username,
        nickname: param?.nickname,
        mobile: param?.mobile,
        gender: param?.gender,
        birthDay: param?.birthDay,
        zipCode: param?.zipCode,
        address: param?.address,
        addressDetail: param?.addressDetail,
      }))
    }
  })
);

const getLoginCookieData = ():LoginDataType => {
  return {
    token: getCookie('token'),
    address: getCookie('address'),
    addressDetail: getCookie('addressDetail'),
    birthDay: getCookie('birthDay'),
    email: getCookie('email'),
    gender: getCookie('gender'),
    mobile: getCookie('mobile'),
    nickname: getCookie('nickname'),
    username: getCookie('username'),
    zipCode: getCookie('zipCode'),
  }
}

const setLoginCookieData = (param: LoginDataType | undefined) => {
  if (param) {
    setCookie('token', param?.token);
    setCookie('address', param?.address);
    setCookie('addressDetail', param?.addressDetail);
    setCookie('birthDay', param?.birthDay);
    setCookie('email', param?.email);
    setCookie('gender', param?.gender);
    setCookie('mobile', param?.mobile);
    setCookie('nickname', param?.nickname);
    setCookie('username', param?.username);
    setCookie('zipCode', param?.zipCode);
  } else {
    deleteCookie('token');
    deleteCookie('address');
    deleteCookie('addressDetail');
    deleteCookie('birthDay');
    deleteCookie('email');
    deleteCookie('gender');
    deleteCookie('mobile');
    deleteCookie('nickname');
    deleteCookie('username');
    deleteCookie('zipCode');
  }
}

export {
  useLoginModalStore,
  useLoginDataSotre,
  getLoginCookieData,
  setLoginCookieData,
  type LoginDataType,
};