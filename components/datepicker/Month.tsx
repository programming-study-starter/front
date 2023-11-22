import Header from '@/components/datepicker/month/Header';
import Body from '@/components/datepicker/month/Body';

import { CustomDatepickerType } from '@/components/datepicker/type/CustomDatepickerType';

export default function CustomDatepickerMonth({
  onModeChange,
  pickerDate,
  onPickerDateChange,
  selectedDate,
  onSelect,
  minDate=getDate({year: -100}),
  maxDate=getDate({year: 100}),
} : CustomDatepickerType) {
  return (
    <>
      <Header onModeChange={onModeChange}
              pickerDate={pickerDate}
              onPickerDateChange={onPickerDateChange}
              selectedDate={selectedDate}
              onSelect={onSelect}
              minDate={minDate}
              maxDate={maxDate}
      />
      <Body onModeChange={onModeChange}
            pickerDate={pickerDate}
            onPickerDateChange={onPickerDateChange}
            selectedDate={selectedDate}
            onSelect={onSelect}
            minDate={minDate}
            maxDate={maxDate}
      />
    </>
  );
}