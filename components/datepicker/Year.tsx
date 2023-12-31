import Header from '@/components/datepicker/year/Header';
import Body from '@/components/datepicker/year/Body';

import { CustomDatepickerType } from '@/components/datepicker/type/CustomDatepickerType';
import { getDate } from '@/components/utils/DateUtil';

export default function CustomDatepickerYear({
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