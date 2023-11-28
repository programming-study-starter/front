import Image from 'next/image';

import { Button } from 'flowbite-react';

import { CustomDatepickerType } from '@/components/datepicker/type/CustomDatepickerType';
import { getDate, getDateYyyyMMdd } from '@/components/utils/DateUtil';

export default function CustomDatepickerMonthHeader({
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
      const targetDate = getDate({date: new Date(pickerDate), month: moveValue});
      onPickerDateChange(getDateYyyyMMdd(targetDate));
    }
  }

  const isAvailableMove = (moveValue: number) => {
    const targetDate = getDate({date: new Date(pickerDate), month: moveValue});
    if ( targetDate < minDate || targetDate > maxDate ) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className=' w-full flex flex-row gap-2 items-center place-content-center'>
      <Button size={`sm`} color={`none`} className={`w-1/6`} disabled={!isAvailableMove(-12)} onClick={() => { onClickMove(-12); }}><Image src={`/icons/solid/arrows/angle-left.svg`} alt={`left`} width={8} height={8} /></Button>
      <Button size={`sm`} color={`none`} className={`w-4/6 font-bold`} onClick={() => { onModeChange('year') }}>{`${pickerDate.substring(0, 4)}`}</Button>
      <Button size={`sm`} color={`none`} className={`w-1/6`} disabled={!isAvailableMove(12)} onClick={() => { onClickMove(12); }}><Image src={`/icons/solid/arrows/angle-right.svg`} alt={`right`} width={8} height={8} /></Button>
    </div>
  );

}