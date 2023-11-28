import { useState, useRef } from 'react';
import Image from 'next/image';

import {
  Button,
  Card,
  Dropdown,
  Modal,
  TextInput
} from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi';

import Day from '@/components/datepicker/Day';
import Month from '@/components/datepicker/Month';
import Year from '@/components/datepicker/Year';
import { getDate, getDateYyyyMM, getDateYyyyMMdd, getDaysOfCalendar, getMonthOfCalendar, getYearOfCalendar } from '@/components/utils/DateUtil';

export default function CustomDatepicker({
  isOpen=false,
  date,
  onChange,
  todayLabel="Today",
  clearLabel="Clear",
  minDate=getDate({year: -100}),
  maxDate=getDate({year: 100}),
} : {
  isOpen?: boolean,
  date?: Date,
  onChange: Function,
  todayLabel?: string,
  clearLabel?: string,
  minDate?: Date,
  maxDate?: Date,
}) {
  const [open, setOpen] = useState(isOpen);
  const [mode, setMode] = useState<'day'|'month'|'year'>('day');
  const [inputDate, setInputDate] = useState(date ? getDateYyyyMMdd(date) : undefined);
  const [pickerDate, setPickerDate] = useState(getDateYyyyMMdd());
  const [pickerDays, setPickerDays] = useState<string[]>(getDaysOfCalendar());

  const handleOpen = (isOpen:boolean) => {
    if ( isOpen ) {
      setMode('day');
      const dStr = inputDate ? getDateYyyyMMdd(new Date(inputDate)) : getDateYyyyMMdd();
      const d = new Date(dStr);
      setPickerDate(getDateYyyyMMdd(d));
      setPickerDays(getDaysOfCalendar(d));
    }
    setOpen(isOpen);
  }

  const drawArea = () => {
    switch(mode) {
      case 'day': 
        return (<Day onModeChange={setMode} 
                     pickerDate={pickerDate} 
                     onPickerDateChange={setPickerDate} 
                     selectedDate={inputDate}
                     onSelect={onClickDay}
                     minDate={minDate} 
                     maxDate={maxDate} />);
      case 'month':
        return (<Month onModeChange={setMode} 
                       pickerDate={pickerDate} 
                       onPickerDateChange={setPickerDate} 
                       selectedDate={inputDate}
                       onSelect={onClickDay}
                       minDate={minDate} 
                       maxDate={maxDate} />);
      case 'year':
        return (<Year onModeChange={setMode} 
                      pickerDate={pickerDate} 
                      onPickerDateChange={setPickerDate} 
                      selectedDate={inputDate}
                      onSelect={onClickDay}
                      minDate={minDate} 
                      maxDate={maxDate} />);
      default:
        return (<Day onModeChange={setMode} 
                     pickerDate={pickerDate} 
                     onPickerDateChange={setPickerDate} 
                     selectedDate={inputDate}
                     onSelect={onClickDay}
                     minDate={minDate} 
                     maxDate={maxDate} />);
    }
  }

  const onClickDay = (day?:string | undefined) => {
    setInputDate(day);
    onChange(day ? new Date(day) : undefined);
    setOpen(false);
  }

  return (
    <>
      <TextInput icon={HiCalendar} type='text' placeholder={`연도-월-일`} defaultValue={inputDate} readOnly onClick={() => { handleOpen(open ? false : true); }} />
      <Modal show={open} onClose={() => { handleOpen(false); }}>
        <Modal.Body>
          {drawArea()}
        </Modal.Body>
        <Modal.Footer>
          <div className='w-full flex flex-row gap-2 items-center place-content-center'>
            <Button size={`sm`} className='w-1/2' color={`primary`} onClick={() => {onClickDay(getDateYyyyMMdd());}}>{todayLabel}</Button>
            <Button size={`sm`} className='w-1/2' color={`gray`} onClick={() => {onClickDay()}}>{clearLabel}</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}