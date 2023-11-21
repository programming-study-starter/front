const getDate = (param:{date:date, year:number, month:number, day:number}={date:new Date(), year:0, month:0, day:0}):Date => {
  let result = new Date();
  if ( param.date ) {
    result = param.date;
  }
  result.setDate(result.getDate()+(param.day ? param.day : 0));
  result.setMonth(result.getMonth()+(param.month ? param.month : 0));
  result.setMonth(result.getMonth()+((param.year ? param.year : 0) * 12));
  return result;
}

const getDateYyMMdd = (d:Date=new Date()):string => { return getDateStr(d, 'yyMMdd'); }
const getDateYyyyMM = (d:Date=new Date()):string => { return getDateStr(d, 'yyyyMM'); }
const getDateYyyyMMdd = (d:Date=new Date()):string => { return getDateStr(d, 'yyyyMMdd'); }
const getDateYyyyMMddHH = (d:Date=new Date()):string => { return getDateStr(d, 'yyyyMMddHH'); }
const getDateYyyyMMddHHmm = (d:Date=new Date()):string => { return getDateStr(d, 'yyyyMMddHHmm'); }
const getDateYyyyMMddHHmmss = (d:Date=new Date()):string => { return getDateStr(d, 'yyyyMMddHHmmss'); }
const getDateFullStr = (d:Date=new Date()):string => {return getDateStr(d, 'yyyyMMddHHmmss');}

const getDateStr = (d: Date, format:  'yyMMdd' | 'yyyyMM' | 'yyyyMMdd' | 'yyyyMMddHH' | 'yyyyMMddHHmm' | 'yyyyMMddHHmmss'='yyyyMMdd', delimiter: {date: '-' | '/', time: ':' | ' '}={date: '-', time: ':'}):string => {
  const year = `${d.getFullYear()}`;
  const month = `${d.getMonth()+1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  const hours = `${d.getHours()}`.padStart(2, '0');
  const minutes = `${d.getMinutes()}`.padStart(2, '0');
  const seconds = `${d.getSeconds()}`.padStart(2, '0');

  switch(format) {
    case 'yyMMdd':
      return `${year.substring(0, 2)}${delimiter.date}${month}${delimiter.date}${day}`;
    case 'yyyyMM':
      return `${year}${delimiter.date}${month}`;
    case 'yyyyMMdd':
      return `${year}${delimiter.date}${month}${delimiter.date}${day}`;
    case 'yyyyMMddHH':
      return `${year}${delimiter.date}${month}${delimiter.date}${day} ${hours}`;
    case 'yyyyMMddHHmm':
      return `${year}${delimiter.date}${month}${delimiter.date}${day} ${hours}${delimiter.time}${minutes}`;
    case 'yyyyMMddHHmmss':
      return `${year}${delimiter.date}${month}${delimiter.date}${day} ${hours}${delimiter.time}${minutes}${delimiter.time}${seconds}`;
    default :
      return `${year}${delimiter.date}${month}${delimiter.date}${day}`;
  }
}

const getDaysOfCalendar = (d: Date=new Date()):string[] => {
  const startThisMonth = new Date(d.getFullYear(), d.getMonth(), 1);
  const startNextMonth = new Date(d.getFullYear(), d.getMonth()+1, 1);
  const endThisMonth = new Date(d.getFullYear(), d.getMonth()+1, 0);
  const endLastMonth = new Date(d.getFullYear(), d.getMonth(), 0);

  const endDateOfthisMonth = endThisMonth.getDate();
  const endDateOfLastMonth = endLastMonth.getDate();
  const startDayOfThisMonth = startThisMonth.getDay();
  const endDayOfThisMonth = endThisMonth.getDay();

  const lastMonthDayCount = startDayOfThisMonth - 0;
  const nextMonthDayCount = 6 - endDayOfThisMonth + 14;

  const daysOfLastMonth = Array(lastMonthDayCount).fill(1).map((d:number, idx:number) => endDateOfLastMonth - idx).reverse().map((d:number) => `${getDateYyyyMM(endLastMonth)}-${String(d).padStart(2, '0')}`);
  const daysOfThisMonth = Array(endDateOfthisMonth).fill(1).map((d:number, idx:number) => idx + 1).map((d:number) => `${getDateYyyyMM(startThisMonth)}-${String(d).padStart(2, '0')}`);
  const daysOfNextMonth = Array(nextMonthDayCount).fill(1).map((d:number, idx:number) => idx + 1).map((d:number) => `${getDateYyyyMM(startNextMonth)}-${String(d).padStart(2, '0')}`);
  const result = [...daysOfLastMonth,...daysOfThisMonth,...daysOfNextMonth].slice(0, 42);
  return result;
}

const getMonthOfCalendar = ():string[] => {
  const result = Array(12).fill(1).map((d:number, idx:number) => String(idx+1).padStart(2, '0'));
  return result;
}

const getYearOfCalendar = (d:date=new Date()):string[] => {
  const startYear = Math.floor(d.getFullYear() / 10) * 10;
  return Array(10).fill(1).map((d:number, idx:number) => String(startYear+idx));
}

export {
  getDate,
  getDateYyMMdd,
  getDateYyyyMM,
  getDateYyyyMMdd,
  getDateYyyyMMddHH,
  getDateYyyyMMddHHmm,
  getDateYyyyMMddHHmmss,
  getDateFullStr,
  getDateStr,
  getDaysOfCalendar,
  getMonthOfCalendar,
  getYearOfCalendar,
};