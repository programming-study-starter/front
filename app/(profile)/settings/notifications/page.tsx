'use client';

import { useState } from 'react';
import { Card, TextInput, Timeline, ToggleSwitch } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

export default function SettingsNotificationsPage() {
  const [receiveMail, setReceiveMail] = useState(false);
  return (
    <div className='w-full'>
      <div>
        <p className='font-bold'>Notifications</p>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0" />
      <div className='mb-2'>
        <Card>
          <h5 className="text-md font-bold tracking-tight text-gray-900">Default notifications email</h5>
          <TextInput icon={HiMail} type='email' readOnly />
          <ToggleSwitch color={`purple`} checked={receiveMail} label='Receive emails' onChange={setReceiveMail} />
        </Card>
      </div>
      <div className='mb-2'>
        <Card>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>February 2022</Timeline.Time>
                <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
                <Timeline.Body>
                  Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                  E-commerce & Marketing pages.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>March 2022</Timeline.Time>
                <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                <Timeline.Body>
                  All of the pages and components are first designed in Figma and we keep a parity between the two versions
                  even as we update the project.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>April 2022</Timeline.Time>
                <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
                <Timeline.Body>
                  Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}