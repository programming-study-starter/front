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
import { HiLink } from 'react-icons/hi';

export default function SettingsPage() {
  const defaultAvatarImg = '/icons/solid/user/user.svg';

  return (
    <div className='w-full'>
      <div>
        <p className='font-bold'>Global Profile</p>
      </div>
      <hr class="h-px my-2 bg-gray-200 border-0" />
      <div className='flex'>
        <form className="flex flex-col w-4/6 gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput id="email" type="email" placeholder="name@flowbite.com" readOnly />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput id="name" type="text" placeholder={`creator`} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="nickname" value="Nickname" />
            </div>
            <TextInput id="nickname" type="text" placeholder={`creator`} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="mobile" value="Phone number" />
            </div>
            <TextInput id="mobile" type="tel" placeholder={`00000000000`} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="about_me" value="About Me"/>
            </div>
            <Textarea id='about_me' rows={5} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="social_link" value="Social link"/>
            </div>
            <div className='grid grid-cols-1 gap-2' id="social_link">
              <TextInput icon={HiLink} type="text" placeholder="Link to social profile" />
              <TextInput icon={HiLink} type="text" placeholder="Link to social profile" />
              <TextInput icon={HiLink} type="text" placeholder="Link to social profile" />
            </div>
          </div>
        </form>
        <form className='flex flex-col w-2/6 gap-4'>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="profile_picture" value="Profile picture"/>
            </div>
            <div className='grid grid-cols-1 place-items-center'>
              <Dropdown arrowIcon={false} inline label={<Avatar id='profile_picture' img={defaultAvatarImg}  size={`xl`} rounded bordered />}>
                <Dropdown.Item>Change</Dropdown.Item>
                <Dropdown.Item>Remove</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}