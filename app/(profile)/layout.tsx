'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from 'flowbite-react';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className='flex'>
      <div>
        <Sidebar theme={{"root": {"inner": "h-full overflow-y-auto overflow-x-hidden rounded px-3"}}}>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item><span className={`cursor-pointer ${pathname == '/settings' ? 'font-bold' : ''}`}>Public profile</span></Sidebar.Item>
              <Sidebar.Item><span className={`cursor-pointer ${pathname == '/settings/account' ? 'font-bold' : ''}`}>Account</span></Sidebar.Item>
              <Sidebar.Item><span className={`cursor-pointer ${pathname == '/settings/notifications' ? 'font-bold' : ''}`}>Notifications</span></Sidebar.Item>
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
      {children}
    </div>
  );
}