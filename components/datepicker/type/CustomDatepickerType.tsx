export interface CustomDatepickerType {
  onModeChange: Function, 
  pickerDate: string, 
  onPickerDateChange: Function,
  selectedDate: string | undefined,
  onSelect: Function,
  minDate: Date,
  maxDate: Date,
}