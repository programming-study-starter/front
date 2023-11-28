'use client';

import { FormEvent, useState } from 'react';

import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { usePathname, useRouter } from 'next/navigation';
import { HiLockClosed, HiMail } from 'react-icons/hi';

import { setLoginCookieData, useLoginDataStore, useLoginModalStore, type LoginDataType } from '@/components/modal/login/LoginStore';
import { postApi } from '@/components/modules/Fetch';
import { onlyNotLoginUserPage } from '@/components/utils/PathnameUtil';

export default function LoginModal() {
  const router = useRouter();
  const pathname = usePathname();

  const isOpen = useLoginModalStore((state) => state.isOpen);
  const email = useLoginModalStore((state) => state.email);
  const password = useLoginModalStore((state) => state.password);
  const setEmail = useLoginModalStore((state) => state.setEmail);
  const setPassword = useLoginModalStore((state) => state.setPassword);
  const setIsOpen = useLoginModalStore((state) => state.setIsOpen);
  const setData = useLoginDataStore((state) => state.setData);

  const submitLogin = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postApi('/back-api/auth/login', {email:email, password:password})
    .then((data) => {
      const loginResult:LoginDataType = {
        token: data.accessToken,
        address: data.address,
        addressDetail: data.addressDetail,
        birthDay: data.birthDay,
        email: data.email,
        gender: data.gender,
        mobile: data.mobile,
        nickname: data.nickname,
        username: data.username,
        zipCode: data.zipCode,
      };
      setData(loginResult);
      setLoginCookieData(loginResult);
      setIsOpen(false);
      if ( onlyNotLoginUserPage.includes(pathname) ) {
        router.replace('/');
      }
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
                        defaultValue={email}
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
                        defaultValue={password}
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