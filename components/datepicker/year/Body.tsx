import { Button } from 'flowbite-react';

import { CustomDatepickerBodyType } from '@/components/datepicker/type/CustomDatepickerType';
import { getDate, getDateYyyyMM, getDateYyyyMMdd } from '@/components/utils/DateUtil';

import { getYearOfCalendar } from '@/components/utils/DateUtil';

export default function CustomDatepickerYearBody({
  onModeChange,
  pickerDate,
  onPickerDateChange,
  selectedDate,
  onSelect,
  minDate=getDate({year: -100}),
  maxDate=getDate({year: 100}),
} : CustomDatepickerBodyType) {
  const years = getYearOfCalendar(new Date(pickerDate));

  const onClickYear = (month:string) => {
    const d = new Date(`${month}-01-01`);
    onPickerDateChange(getDateYyyyMMdd(d));
    onModeChange('month');
  }

  return (
    <div className='mt-2 grid grid-cols-5 gap-2'>
      {
        years.map((d:string) => {
          const disabled = (Number(d) < minDate.getFullYear() | Number(d) > maxDate.getFullYear());
          return (
            <Button key={`year-${d}`} 
                    size={`sm`} 
                    color={selectedDate?.substring(0, 4) == d ? 'primary' : `none`} 
                    className={`${disabled ? '' : 'font-bold'}`}
                    onClick={() => { if(!disabled) onClickYear(d) }}
                    disabled={disabled}
            >
              {Number(d)}
            </Button>
          );
        })
      }
    </div>
  );
}