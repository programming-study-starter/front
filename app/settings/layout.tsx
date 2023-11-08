'use client';

import { Sidebar } from 'flowbite-react';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>
        <Sidebar theme={{"root": {"inner": "h-full overflow-y-auto overflow-x-hidden rounded px-3"}}}>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                Profile
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      {children}
    </>
  );
}