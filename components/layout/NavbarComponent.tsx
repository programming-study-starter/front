'use client';

import { useEffect } from "react";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Button, Navbar } from "flowbite-react";

import  { type NavbarType, NavbarList } from '@/components/layout/NavbarData';

import ProfileComponent from '@/components/profile/Profile';
import LoginModal from '@/components/modal/login/Login';

import { useLoginModalStore, useLoginDataStore, getLoginCookieData, type LoginDataType } from '@/components/modal/login/LoginStore';

export default function NavbarComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const setIsOpen = useLoginModalStore((state) => state.setIsOpen);
  const setEmail = useLoginModalStore((state) => state.setEmail);
  const setPassword = useLoginModalStore((state) => state.setPassword);
  const cookieData:LoginDataType = getLoginCookieData();
  const token = useLoginDataStore((state) => state.token);
  const setData = useLoginDataStore((state) => state.setData);

  const onClickNavbar = (url:string) => {
    router.push(url);
  }

  const onClickLogin = () => {
    setIsOpen(true);
    setEmail('');
    setPassword('');
  }

  useEffect(() => {
    if (cookieData.token) setData(cookieData);
  }, []);

  return (
    <>
      <Navbar fluid rounded border>
        <Navbar.Brand>
          <Image src={`/images/logo.png`} alt="logo" width={20} height={20} />
          <span className="self-center whitespace-nowrap text-xl font-semibold">{`${process.env.NEXT_PUBLIC_APP_TITLE}`}</span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-1">
          {
            token ? 
            <ProfileComponent/>
            :
            <Button pill={true} size={`sm`} onClick={() => onClickLogin()} color="primary">Login</Button>
          }
          <Navbar.Toggle />
        </div>
        
        <Navbar.Collapse>
          {NavbarList.map((d:NavbarType, idx:number) => {
            return (
              <Navbar.Link key={`navbar-${idx}`} onClick={() => {onClickNavbar(d.url)}} className={`cursor-pointer font-bold ${d.url == pathname ? 'text-primary' : 'text-gray-900'}`}>
                {d.label}
              </Navbar.Link>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
      <LoginModal />
    </>
  );
}
