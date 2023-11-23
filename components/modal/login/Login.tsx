'use client';

import { FormEvent, useState } from 'react';
import { setCookie } from 'cookies-next';
import axios from '@/components/modules/Axios';
import { useRouter, usePathname } from 'next/navigation';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { HiMail, HiLockClosed } from 'react-icons/hi';

import { useLoginModalStore, useLoginDataStore, setLoginCookieData, type LoginDataType } from '@/components/modal/login/LoginStore';

export default function LoginModal() {
  const router = useRouter();
  const pathname = usePathname();

  const isOpen = useLoginModalStore((state) => state.isOpen);
  const setIsOpen = useLoginModalStore((state) => state.setIsOpen);
  const setData = useLoginDataStore((state) => state.setData);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${process.env.NEXT_PUBLIC_BACK_API_URL}/auth/login`)
    axios.post('/back-api/auth/login', {email, password})
    .then((res) => {
      console.log(res);
      const loginResult:LoginDataType = {
        token: res.data.accessToken,
        address: res.data.address,
        addressDetail: res.data.addressDetail,
        birthDay: res.data.birthDay,
        email: res.data.email,
        gender: res.data.gender,
        mobile: res.data.mobile,
        nickname: res.data.nickname,
        username: res.data.username,
        zipCode: res.data.zipCode,
      };
      setData(loginResult);
      setLoginCookieData(loginResult);
      setIsOpen(false);
    });
  }

  const goToCreateAccount = () => {
    setIsOpen(false);
    router.push('create-account');
  }

  return (
    <Modal show={isOpen} size={'md'} onClose={() => setIsOpen(false)}>
      <form onSubmit={submitLogin}>
        <Modal.Header>{process.env.NEXT_PUBLIC_APP_TITLE}</Modal.Header>
        <Modal.Body>
          <div className='space-y-6'>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email"
                        type='email'
                        placeholder="hong@email.com"
                        icon={HiMail}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" 
                        type="password" 
                        placeholder='*********'
                        value={password}
                        icon={HiLockClosed}
                        onChange={(event) => setPassword(event.target.value)}
                        required />
            </div>
            <div className="flex justify-between cursor-pointer">
              <a href="#" className="text-sm text-gray-900 hover:text-primary-700 hover:underline">
                Lost Password?
              </a>
              <a className="text-sm text-gray-900 hover:text-primary-700 hover:underline" onClick={() => goToCreateAccount()}>
                Create account
              </a>
            </div>
            <div className="w-full">
              <Button type='submit' pill={true} size={`sm`} color="primary" fullSized={true}>Login</Button>
            </div>
          </div>
        </Modal.Body>
      </form>
    </Modal>
  );
}