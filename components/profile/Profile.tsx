'use client';

import { getCookie } from "cookies-next";
import { Avatar, Dropdown } from "flowbite-react";

import { useLoginDataSotre, setLoginCookieData } from '@/components/modal/login/LoginStore';


export default function ProfileComponent() {
  const setData = useLoginDataSotre((state) => state.setData);

  const fnLogOut = () => {
    setData(undefined);
    setLoginCookieData(undefined);
  }

  return (
    <div className="pr-2">
      <Dropdown 
        arrowIcon={false}
        inline={true}
        label={
          <Avatar img={`/icons/outline/user/user.svg`} alt={`user`} rounded />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">{getCookie('username')}</span>
          <span className="block truncate text-sm font-medium">{getCookie('email')}</span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => fnLogOut()}>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}