'use client';

import { Avatar, Dropdown } from "flowbite-react";

import useSWR from 'swr';
import { fetcher } from '@/components/modules/Fetch';

export default function UserAlert() {
  const { data, error, isLoading } = useSWR('/back-api/member/alert', fetcher, { refreshInterval: 2000 });
  const returnDefault = <Dropdown arrowIcon={false} inline label={ <Avatar className={`cursor-pointer`} img={`/icons/outline/general/bell.svg`} alt={`user`} size={`sm`} rounded bordered /> }>
    <Dropdown.Header>New messages</Dropdown.Header>
    <Dropdown.Item>표시할 메시지가 없습니다</Dropdown.Item>
  </Dropdown>;
  if (error || isLoading) return returnDefault;
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
        returnDefault
      }
    </Dropdown>
  );
}