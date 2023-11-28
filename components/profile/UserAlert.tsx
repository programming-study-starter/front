'use client';

import { Avatar, Dropdown } from "flowbite-react";

import useSWR from 'swr';
import { getCookie } from "cookies-next";
import { fetcher } from '@/components/modules/Fetch';

export default function UserAlert() {
  const token = getCookie('token');

  const { data, error, isLoading } = useSWR(token ? '/back-api/member/alert' : null, fetcher, { refreshInterval: 2000 });

  if (error || isLoading) return (
    <Dropdown arrowIcon={false} inline label={ <Avatar className={`cursor-pointer`} img={`/icons/outline/general/bell.svg`} alt={`user`} size={`sm`} rounded bordered /> }>
      <Dropdown.Header>New messages</Dropdown.Header>
      <Dropdown.Item>표시할 메시지가 없습니다</Dropdown.Item>
    </Dropdown>
  );
  return (
    <Dropdown arrowIcon={false} inline label={ <Avatar className={`cursor-pointer`} status={data.length > 0 ? 'online': undefined} img={`/icons/outline/general/bell.svg`} alt={`user`} size={`sm`} rounded bordered /> }>
      <Dropdown.Header>New messages</Dropdown.Header>
      {
        data.length > 0 ? 
        data.map((msg:any, idx:number) => {
          return (
            <Dropdown.Item key={`profile-message-${idx}`}>
              {msg.title}
              {msg.contents}
            </Dropdown.Item>
          );
        })
        :
        <Dropdown.Item>표시할 메시지가 없습니다</Dropdown.Item>
      }
      </Dropdown>
  );
}