import { Button } from 'flowbite-react';

import { CustomDatepickerType } from '@/components/datepicker/type/CustomDatepickerType';
import { getDate, getDateYyyyMM, getDateYyyyMMdd } from '@/components/utils/DateUtil';

import { getMonthOfCalendar } from '@/components/utils/DateUtil';

export default function CustomDatepickerMonthBody({
  onModeChange,
  pickerDate,
  onPickerDateChange,
  selectedDate,
  onSelect,
  minDate=getDate({year: -100}),
  maxDate=getDate({year: 100}),
} : CustomDatepickerType) {
  const months = getMonthOfCalendar();

  const onClickMonth = (month:string) => {
    const d = new Date(`${month}-01`);
    onPickerDateChange(getDateYyyyMMdd(d));
    onModeChange('day');
  }

  return (
    <div className='mt-2 grid grid-cols-4 gap-2'>
      {
        months.map((d:string) => {
          const thisMonth = `${pickerDate.substring(0, 4)}-${d}`;
          const disabled = (Number(thisMonth.replace('-', '')) < Number(getDateYyyyMM(minDate).replace('-', '')) || Number(thisMonth.replace('-', '')) > Number(getDateYyyyMM(maxDate).replace('-', '')));
          return (
            <Button key={`month-${d}`} 
                    size={`sm`} 
                    color={selectedDate?.substring(0, 7) == thisMonth ? 'primary' : `none`} 
                    className={`font-bold`}
                    onClick={() => { if(!disabled) onClickMonth(thisMonth) }}
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