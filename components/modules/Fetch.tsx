import { getCookie } from "cookies-next";

const defaultOptions:any = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow_Credntials' : true,
  },
};

const getApi = async (url:string, options:any=defaultOptions) => {
  if (getCookie('token')) {
    options.headers['Authorization'] = `Bearer ${getCookie('token')}`;
  }

  const res = await fetch(url, options);
  return res.json();
}

const deleteApi = async (url:string, options:any=defaultOptions) => {
  if (getCookie('token')) {
    options.headers['Authorization'] = `Bearer ${getCookie('token')}`;
  }

  const res = await fetch(url, options);
  return res.json();
}

interface BodyParamsType {
  [key:string] : any
}

const postApi = async (url:string, body:BodyParamsType, options:any=defaultOptions) => {
  options.method = 'POST';
  if (getCookie('token')) {
    options.headers['Authorization'] = `Bearer ${getCookie('token')}`;
  }
  options.body = JSON.stringify(body);
  console.log(body);

  const res = await fetch(url, options);
  return res.json();
}

const patchApi = async (url:string, body:BodyParamsType, options:any=defaultOptions) => {
  options.method = 'PATCH';
  if (getCookie('token')) {
    options.headers['Authorization'] = `Bearer ${getCookie('token')}`;
  }
  options.body = JSON.stringify(body);
  console.log(body);

  const res = await fetch(url, options);
  return res.json();
}

const putApi = async (url:string, body:BodyParamsType, options:any=defaultOptions) => {
  options.method = 'PUT';
  if (getCookie('token')) {
    options.headers['Authorization'] = `Bearer ${getCookie('token')}`;
  }
  options.body = JSON.stringify(body);
  console.log(body);

  const res = await fetch(url, options);
  return res.json();
}

const fetcher = (url:string) => {
  if (getCookie('token')) {
    defaultOptions.headers['Authorization'] = `Bearer ${getCookie('token')}`;
  }
  return fetch(url, defaultOptions).then(r => r.json())
};

export {
  fetcher,
  getApi,
  postApi,
  putApi,
  patchApi,
  deleteApi,
};