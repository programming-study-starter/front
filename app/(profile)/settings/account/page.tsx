'use client';

import { useState } from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  Dropdown,
  FileInput,
  Label,
  Modal,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from 'flowbite-react';
import { HiLink } from 'react-icons/hi';

export default function SettingsAccountPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className='w-full'>
        <div>
          <p className='font-bold'>Change Password</p>
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0" />
        <Button outline color="success" onClick={() => setOpenModal(true)} className='w-1/2' pill>Change Password</Button>
        <div className='mt-2'>
          <p className='font-bold text-red-500'>Delete Account</p>
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0" />
        <Button outline color="failure" className='w-1/2' pill>Delete Account</Button>
      </div>
      <Modal dismissible={false} show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Change Password</Modal.Header>
        <Modal.Body>
          <form className='flex flex-col w-full gap-4'>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="current_password" value="Current password"/>
              </div>
              <TextInput id='current_password' type='password' required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="new_password" value="New password"/>
              </div>
              <TextInput id='new_password' type='password' required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="confirm_new_password" value="Confirm new password"/>
              </div>
              <TextInput id='confirm_new_password' type='password' required />
            </div>
            <div>
              <Button.Group outline>
                <Button color='success'>Change</Button>
                <Button color='gray' onClick={() => setOpenModal(false)}>Close</Button>
              </Button.Group>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}