'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Sidebar } from 'flowbite-react';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='flex pt-20'>
      <div>
        <Sidebar theme={{"root": {"inner": "h-full overflow-y-auto overflow-x-hidden rounded px-3 cursor-pointer"}}}>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item as={Link} href={`/settings`} active={pathname == '/settings'}>Public profile</Sidebar.Item>
              <Sidebar.Item as={Link} href={`/settings/account`} active={pathname == '/settings/account'}>Account</Sidebar.Item>
              <Sidebar.Item as={Link} href={`/settings/notifications`} active={pathname == '/settings/notifications'}>Notifications</Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Collapse 
                label='My Work'
                open={true}
                renderChevronIcon={(theme, open) => {
                  const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                  return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                }}
              >
                <Sidebar.Item>Poetry</Sidebar.Item>
                <Sidebar.Item>Novel</Sidebar.Item>
                <Sidebar.Item>Comic</Sidebar.Item>
                <Sidebar.Item>Animation</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse
                label='My Favorites'
                open={true}
                renderChevronIcon={(theme, open) => {
                  const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                  return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                }}
              >
                <Sidebar.Item>Poetry</Sidebar.Item>
                <Sidebar.Item>Novel</Sidebar.Item>
                <Sidebar.Item>Comic</Sidebar.Item>
                <Sidebar.Item>Animation</Sidebar.Item>
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