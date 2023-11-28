'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { Avatar, Dropdown } from "flowbite-react";

import { useLoginDataStore, setLoginCookieData } from '@/components/modal/login/LoginStore';
import UserAlert from "@/components/profile/UserAlert";

export default function ProfileComponent() {
  const router = useRouter();
  const setData = useLoginDataStore((state) => state.setData);
  const defaultAvatarImg = '/icons/solid/user/user.svg';

  const onClickLogOut = () => {
    setData(undefined);
    setLoginCookieData(undefined);
    router.push('/');
  }

  const onClickBell = () => {
  }

  return (
    <div className="pr-2 flex flex-row gap-4">
      <UserAlert/>
      <Dropdown arrowIcon={false} inline label={ <Avatar img={defaultAvatarImg} alt={`user`} size={`md`} rounded bordered /> }>
        <Dropdown.Header>
          <span className="block text-sm">{getCookie('username')}</span>
          <span className="block truncate text-sm font-medium">{getCookie('email')}</span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item onClick={() => router.push('/settings')}>Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => onClickLogOut()}>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}