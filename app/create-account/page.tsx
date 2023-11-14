'use client';

import {
  Avatar,
  Button,
  Checkbox,
  Dropdown,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from 'flowbite-react';
import { HiLocationMarker, HiLockClosed, HiMail, HiPhone, HiUser } from 'react-icons/hi';

export default function CreateAccountPage() {
  return (
    <div className='w-full'>
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
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput icon={HiUser} id="name" type="text" placeholder={`creator`} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="nickname" value="Nickname" />
            </div>
            <TextInput icon={HiUser} id="nickname" type="text" placeholder={`creator`} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="mobile" value="Phone number" />
            </div>
            <TextInput icon={HiPhone} id="mobile" type="tel" placeholder={`00000000000`} />
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
          <div>
            <div className="mb-2 block">
              <Label htmlFor="birthday" value="Birthday" />
            </div>
            <div className='flex'>
              <Select>
                <option>Year</option>
              </Select>
              <Select>
                <option>Month</option>
              </Select>
              <Select>
                <option>Day</option>
              </Select>
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Address" />
            </div>
            <div className='flex flex-row gap-2'>
              <TextInput icon={HiLocationMarker} type='text' placeholder={`zip code`}/>
              <TextInput type='text' placeholder={`address`}/>
              <TextInput type='text' placeholder={`address detail`}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}