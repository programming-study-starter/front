import Image from 'next/image';

import { Button } from 'flowbite-react';

import { CustomDatepickerType } from '@/components/datepicker/type/CustomDatepickerType';
import { getDate, getDateYyyyMMdd, getYearOfCalendar } from '@/components/utils/DateUtil';

export default function CustomDatepickerYearHeader({
  onModeChange,
  pickerDate,
  onPickerDateChange,
  selectedDate,
  onSelect,
  minDate=getDate({year: -100}),
  maxDate=getDate({year: 100}),
} : CustomDatepickerType) {

  const onClickMove = (moveValue: number) => {
    if ( isAvailableMove(moveValue) ) {
      const targetDate = getDate({date: new Date(pickerDate), year: moveValue});
      onPickerDateChange(getDateYyyyMMdd(targetDate));
    }
  }

  const isAvailableMove = (moveValue: number) => {
    const targetDate = getDate({date: new Date(pickerDate), year: moveValue});
    if ( targetDate < minDate || targetDate > maxDate ) {
      return false;
    } else {
      return true;
    }
  }

  const years = getYearOfCalendar(new Date(pickerDate));
  return (
    <div className=' w-full flex flex-row gap-2 items-center place-content-center'>
      <Button size={`sm`} color={`none`} className={`w-1/6`} disabled={!isAvailableMove(-10)} onClick={() => { onClickMove(-10); }}><Image src={`/icons/solid/arrows/angle-left.svg`} alt={`left`} width={8} height={8} /></Button>
      <Button size={`sm`} color={`none`} className={`w-4/6 font-bold`}>{`${years[0]}~${years[9]}`}</Button>
      <Button size={`sm`} color={`none`} className={`w-1/6`} disabled={!isAvailableMove(10)} onClick={() => { onClickMove(10); }}><Image src={`/icons/solid/arrows/angle-right.svg`} alt={`right`} width={8} height={8} /></Button>
    </div>
  );
}