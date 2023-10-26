'use client';

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Button, Navbar } from "flowbite-react";
import  { type NavbarType, NavbarList } from '@/components/layout/NavbarData';

export default function NavbarComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const onClickNavbar = (url:string) => {
    router.push(url);
  }

  return (
    <header className="fixed w-screen z-[1000]">
      <Navbar fluid rounded border>
        <Navbar.Brand>
          <Image src={`/images/logo.png`} alt="logo" width={20} height={20} />
          <span className="self-center whitespace-nowrap text-xl font-semibold">{`${process.env.NEXT_PUBLIC_APP_TITLE}`}</span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-1">
          <Button pill={true} size={`sm`} className="bg-primary">Login</Button>
          <Button pill={true} size={`sm`} className="bg-primary">Logout</Button>
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
    </header>
  );
}
