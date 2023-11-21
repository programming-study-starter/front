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

import { getDate, getDateYyyyMM, getDateYyyyMMdd, getDaysOfCalendar, getMonthOfCalendar, getYearOfCalendar } from '@/components/utils/DateUtil';

export default function CustomDatepicker({
  isOpen=false,
  date,
  onChange,
  minDate=getDate({year: -100}),
  maxDate=getDate({year: 100}),
} : {
  isOpen: boolean,
  date?: date,
  onChange: Function,
  minDate: date,
  maxDate: date,
}) {
  const [open, setOpen] = useState(isOpen);
  const [mode, setMode] = useState<'day'|'month'|'year'>('day');
  const [inputDate, setInputDate] = useState(date ? getDateYyyyMMdd(date) : undefined);
  const [pickerDate, setPickerDate] = useState(getDateYyyyMMdd());
  const [pickerDays, setPickerDays] = useState<string[]>(getDaysOfCalendar());

  const handleOpen = (isOpen:false) => {
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
        return drawDayArea();
      case 'month':
        return drawMonthArea();
      case 'year':
        return drawYearArea();
      default:
        return drawDayArea();
    }
  }

  const drawDayArea = () => {
    return (
      <>
        <div className=' w-full flex flex-row gap-2 items-center place-content-center'>
          <Button size={`sm`} color={`none`} className='w-1/6' onClick={() => { handleMonth(-1); }}><Image src={`/icons/solid/arrows/angle-left.svg`} alt={`left`} width={8} height={8} /></Button>
          <Button size={`sm`} color={`none`} className='w-4/6 font-bold' onClick={() => { setMode('month') }}>{`${pickerDate.substring(0, 7)}`}</Button>
          <Button size={`sm`} color={`none`} className='w-1/6' onClick={() => { handleMonth(1); }}><Image src={`/icons/solid/arrows/angle-right.svg`} alt={`right`} width={8} height={8} /></Button>
        </div>
        <div className='mt-2 grid grid-cols-7 gap-2'>
          <Button color={`none`} className='font-bold text-red-500'>일</Button>
          <Button color={`none`} className='font-bold'>월</Button>
          <Button color={`none`} className='font-bold'>화</Button>
          <Button color={`none`} className='font-bold'>수</Button>
          <Button color={`none`} className='font-bold'>목</Button>
          <Button color={`none`} className='font-bold'>금</Button>
          <Button color={`none`} className='font-bold text-blue-500'>토</Button>
          {
            pickerDays.map((day:string, idx:number) => {
              const dayType = new Date(day).getDay();
              const disabled = (new Date(day) < minDate | new Date(day) > maxDate);
              let clsNm = '';
              if (disabled) {
                clsNm = 'text-gray-200';
              } else {
                if ( pickerDate.substring(0, 7) == day.substring(0, 7) ) {
                  if (dayType == 0) {
                    clsNm = 'text-red-500';
                  } else if (dayType == 6) {
                    clsNm = 'text-blue-500';
                  }
                } else {
                  clsNm = 'text-gray-400';
                }
              }

              return (
                <Button key={`days-${day}`} 
                        size={`sm`} 
                        color={`${inputDate == day ? `primary` : `none`}`} 
                        className={clsNm}
                        onClick={() => { if(!disabled) onClickDay(day)}}
                        disabled={disabled}
                >
                {Number(day.substring(8))}
                </Button>
              );
            })
          }
        </div>
      </>
    );
  }

  const drawMonthArea = () => {
    const months = getMonthOfCalendar();
    return (
      <>
        <div className=' w-full flex flex-row gap-2 items-center place-content-center'>
          <Button size={`sm`} color={`none`} className='w-1/6' onClick={() => { handleMonth(-1*12); }}><Image src={`/icons/solid/arrows/angle-left.svg`} alt={`left`} width={8} height={8} /></Button>
          <Button size={`sm`} color={`none`} className='w-4/6 font-bold' onClick={() => { setMode('year') }}>{`${pickerDate.substring(0, 4)}`}</Button>
          <Button size={`sm`} color={`none`} className='w-1/6' onClick={() => { handleMonth(1*12); }}><Image src={`/icons/solid/arrows/angle-right.svg`} alt={`right`} width={8} height={8} /></Button>
        </div>
        <div className='mt-2 grid grid-cols-4 gap-2'>
          {
            months.map((d:number) => {
              const thisMonth = `${pickerDate.substring(0, 4)}-${d}`;
              const disabled = (Number(thisMonth.replace('-', '')) < Number(getDateYyyyMM(minDate).replace('-', '')) | Number(thisMonth.replace('-', '')) > Number(getDateYyyyMM(maxDate).replace('-', '')));
              return (
                <Button key={`month-${d}`} 
                        size={`sm`} 
                        color={inputDate?.substring(0, 7) == thisMonth ? 'primary' : `none`} 
                        onClick={() => { if(!disabled) onClickMonth(thisMonth) }}
                        disabled={disabled}
                >
                  {Number(d)}
                </Button>
              );
            })
          }
        </div>
      </>
    );
  }

  const drawYearArea = () => {
    const years = getYearOfCalendar(new Date(pickerDate));
    return (
      <>
        <div className=' w-full flex flex-row gap-2 items-center place-content-center'>
          <Button size={`sm`} color={`none`} className='w-1/6' onClick={() => { handleMonth(-120); }}><Image src={`/icons/solid/arrows/angle-left.svg`} alt={`left`} width={8} height={8} /></Button>
          <Button size={`sm`} color={`none`} className='w-4/6 font-bold'>{`${years[0]}~${years[9]}`}</Button>
          <Button size={`sm`} color={`none`} className='w-1/6' onClick={() => { handleMonth(120); }}><Image src={`/icons/solid/arrows/angle-right.svg`} alt={`right`} width={8} height={8} /></Button>
        </div>
        <div className='mt-2 grid grid-cols-5 gap-2'>
          {
            years.map((d:string) => {
              const disabled = (Number(d) < minDate.getFullYear() | Number(d) > maxDate.getFullYear());
              return (
                <Button key={`year-${d}`} 
                        size={`sm`} 
                        color={inputDate?.substring(0, 4) == d ? 'primary' : `none`} 
                        onClick={() => { if(!disabled) onClickYear(d) }}
                        disabled={disabled}
                >
                  {Number(d)}
                </Button>
              );
            })
          }
        </div>
      </>
    );
  }

  const handleMonth = (updateValue:number) => {
    const d = getDate({date: new Date(pickerDate), month: updateValue});
    setPickerDate(getDateYyyyMMdd(d));
    setPickerDays(getDaysOfCalendar(d));
  }

  const onClickDay = (day:string | undefined) => {
    setInputDate(day);
    onChange(day ? new Date(day) : undefined);
    setOpen(false);
  }

  const onClickMonth = (month:string) => {
    const d = new Date(`${month}-01`);
    setPickerDate(getDateYyyyMMdd(d));
    setPickerDays(getDaysOfCalendar(d));
    setMode('day');
  }

  const onClickYear = (year:string) => {
    const d = new Date(`${year}-01-01`);
    setPickerDate(getDateYyyyMMdd(d));
    setPickerDays(getDaysOfCalendar(d));
    setMode('month');
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
            <Button size={`sm`} className='w-1/2' color={`primary`} onClick={() => {onClickDay(getDateYyyyMMdd());}}>Today</Button>
            <Button size={`sm`} className='w-1/2' color={`gray`} onClick={() => {onClickDay()}}>Clear</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}