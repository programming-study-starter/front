'use client';

import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { Avatar, Dropdown } from "flowbite-react";

import { useLoginDataSotre, setLoginCookieData } from '@/components/modal/login/LoginStore';

export default function ProfileComponent() {
  const router = useRouter();
  const setData = useLoginDataSotre((state) => state.setData);
  const defaultAvatarImg = '/icons/solid/user/user.svg';

  const fnLogOut = () => {
    setData(undefined);
    setLoginCookieData(undefined);
    router.push('/');
  }

  return (
    <div className="pr-2">
      <Dropdown arrowIcon={false} inline label={ <Avatar img={defaultAvatarImg} alt={`user`} size={`md`} rounded bordered /> }>
        <Dropdown.Header>
          <span className="block text-sm">{getCookie('username')}</span>
          <span className="block truncate text-sm font-medium">{getCookie('email')}</span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item onClick={() => router.push('/settings')}>Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => fnLogOut()}>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}