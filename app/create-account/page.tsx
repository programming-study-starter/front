'use client';

import { useState } from 'react';

import {
  Button,
  Label,
  Radio,
  TextInput,
} from 'flowbite-react';
import { HiLocationMarker, HiLockClosed, HiMail, HiPhone, HiUser } from 'react-icons/hi';

import CustomDatepicker from '@/components/datepicker/CustomDatepicker';

export default function CreateAccountPage() {
  const [date, setDate] = useState<Date>();

  return (
    <div className='w-full px-2'>
      <div>
        <p className='font-bold'>Global Profile</p>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0" />
      <div className='flex'>
        <form className="flex flex-col gap-4 w-full">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput icon={HiMail} id="email" type="email" placeholder="name@flowbite.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput icon={HiLockClosed} id="password" type="password" placeholder="********" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirm_password" value="Confirm password" />
            </div>
            <TextInput icon={HiLockClosed} id="confirm_password" type="password" placeholder="********" required />
          </div>
          <div className='flex flex-row gap-2'>
            <div className='w-full'>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput icon={HiUser} id="name" type="text" placeholder={`creator`} />
            </div>
            <div className='w-full'>
              <div className="mb-2 block">
                <Label htmlFor="nickname" value="Nickname" />
              </div>
              <TextInput icon={HiUser} id="nickname" type="text" placeholder={`creator`} />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="gender" value="Gender" />
            </div>
            <fieldset className='flex max-w-full flex-col gap-4'>
              <div className='flex items-center gap-2'>
                <Radio id='gender-man' name='gender' value={`man`} />
                <Label htmlFor='gender-man'>Man</Label>
                <Radio id='gender-woman' name='gender' value={`woman`} />
                <Label htmlFor='gender-woman'>Woman</Label>
                <Radio id='gender-none' name='gender' value={`none`} defaultChecked />
                <Label htmlFor='gender-none'>I don&apos;t wnat to tell you</Label>
              </div>
            </fieldset>
          </div>
          <div className='flex flex-row gap-2'>
            <div className='w-full'>
              <div className="mb-2 block">
                <Label htmlFor="mobile" value="Phone number" />
              </div>
              <TextInput icon={HiPhone} id="mobile" type="tel" placeholder={`00000000000`} />
            </div>
            <div className='w-full'>
              <div className="mb-2 block">
                <Label htmlFor="birthday" value="Birthday" />
              </div>
              <CustomDatepicker onChange={(d:Date) => { setDate(d); }} maxDate={new Date()}></CustomDatepicker>
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Address" />
            </div>
            <div className='w-full flex flex-row gap-2'>
              <TextInput icon={HiLocationMarker} type='text' className='w-2/6' placeholder={`zip code`}/>
              <TextInput type='text' className='w-4/6' placeholder={`address`}/>
              <TextInput type='text' className='w-4/6' placeholder={`address detail`}/>
            </div>
          </div>
          <div>
            <div className='w-full mt-2 flex flex-row gap-2 items-center place-content-center'>
              <Button type={`button`} color={`primary`} className='w-1/2' onClick={() => console.log(date)}>Button</Button>
              <Button type={`button`} color={`gray`} className='w-1/2' onClick={() => console.log(date)}>Button</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}