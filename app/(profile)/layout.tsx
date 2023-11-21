'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Sidebar } from 'flowbite-react';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='flex'>
      <div>
        <Sidebar>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item as={Link} href={`/settings`} active={pathname == '/settings'}>Public profile</Sidebar.Item>
              <Sidebar.Item as={Link} href={`/settings/account`} active={pathname == '/settings/account'}>Account</Sidebar.Item>
              <Sidebar.Item as={Link} href={`/settings/notifications`} active={pathname == '/settings/notifications'}>Notifications</Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Collapse open={true} label='My Work'
                renderChevronIcon={(theme, open) => {
                  const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                  return <IconComponent aria-hidden />;
                }}
              >
                <Sidebar.Item as={Link} href={`/my-work/poetry`} active={pathname == '/my-work/poetry'}>Poetry</Sidebar.Item>
                <Sidebar.Item as={Link} href={`/my-work/novel`} active={pathname == '/my-work/novel'}>Novel</Sidebar.Item>
                <Sidebar.Item as={Link} href={`/my-work/comic`} active={pathname == '/my-work/comic'}>Comic</Sidebar.Item>
                <Sidebar.Item as={Link} href={`/my-work/animation`} active={pathname == '/my-work/animation'}>Animation</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse open={true} label='My Favorites'
                renderChevronIcon={(theme, open) => {
                  const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                  return <IconComponent aria-hidden />;
                }}
              >
                <Sidebar.Item as={Link} href={`/my-favorites/poetry`} active={pathname == '/my-favorites/poetry'} >Poetry</Sidebar.Item>
                <Sidebar.Item as={Link} href={`/my-favorites/novel`} active={pathname == '/my-favorites/novel'} >Novel</Sidebar.Item>
                <Sidebar.Item as={Link} href={`/my-favorites/comic`} active={pathname == '/my-favorites/comic'} >Comic</Sidebar.Item>
                <Sidebar.Item as={Link} href={`/my-favorites/animation`} active={pathname == '/my-favorites/animation'} >Animation</Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item>Help</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <main className='container'>
        {children}
      </main>
    </div>
  );
}