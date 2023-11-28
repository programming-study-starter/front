import { Button } from 'flowbite-react';

import { CustomDatepickerType } from '@/components/datepicker/type/CustomDatepickerType';
import { getDate, getDateYyyyMMdd } from '@/components/utils/DateUtil';

import { getDaysOfCalendar } from '@/components/utils/DateUtil';

export default function CustomDatepickerDayBody({
  onModeChange,
  pickerDate,
  onPickerDateChange,
  selectedDate,
  onSelect,
  minDate=getDate({year: -100}),
  maxDate=getDate({year: 100}),
} : CustomDatepickerType) {

  const pickerDays = getDaysOfCalendar(new Date(pickerDate));
  return (
    <div className='flex flex-col gap-1'>
      <div className='mt-2 grid grid-cols-7 gap-2 border-b-2'>
        <Button color={`none`} className='font-bold text-red-500'>일</Button>
        <Button color={`none`} className='font-bold'>월</Button>
        <Button color={`none`} className='font-bold'>화</Button>
        <Button color={`none`} className='font-bold'>수</Button>
        <Button color={`none`} className='font-bold'>목</Button>
        <Button color={`none`} className='font-bold'>금</Button>
        <Button color={`none`} className='font-bold text-blue-500'>토</Button>
      </div>
      <div className='mt-2 grid grid-cols-7 gap-2'>
            {
              pickerDays.map((day:string, idx:number) => {
                const dayType = new Date(day).getDay();
                const disabled = (new Date(day) < minDate || new Date(day) > maxDate);
                let clsNm = '';
                if (disabled) {
                  clsNm = 'text-gray-200';
                } else {
                  if ( pickerDate.substring(0, 7) == day.substring(0, 7) ) {
                    if (dayType == 0) {
                      clsNm = 'font-bold text-red-500';
                    } else if (dayType == 6) {
                      clsNm = 'font-bold text-blue-500';
                    }
                  } else {
                    clsNm = 'text-gray-400';
                  }
                }

                return (
                  <Button key={`days-${day}`} 
                          size={`sm`} 
                          color={`${selectedDate == day ? `primary` : `none`}`} 
                          className={clsNm}
                          onClick={() => { if(!disabled) onSelect(day)}}
                          disabled={disabled}
                  >
                  {Number(day.substring(8))}
                  </Button>
                );
              })
            }
      </div>
    </div>
  );
}
