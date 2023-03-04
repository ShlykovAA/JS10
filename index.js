console.log("Hello!!!");

//Return total days count
//getDaysInYear(year);
//getDaysInYear(2021);
// 365
//getDaysInYear(2020);
// 366

const getDaysInYear = (year) => {
  let startDate = new Date(0);
  const newDate = new Date(startDate.setFullYear(year))
  const yearTime = startDate.setFullYear(year+1) - newDate;
  const days = yearTime / 86400000;
  return days
}

console.log(getDaysInYear(2021));
console.log(getDaysInYear(2020));

//Return day number from date
//getDayNumber(date);
//getDayNumber("2023-01-12");
// 12
//getDayNumber("2023-02-26");
// 57

const getDayNumber = (date) => {
  const startDate = new Date(date);
  const firstDayInYear = new Date(startDate);
  firstDayInYear.setMonth(0);
  firstDayInYear.setDate(1);
  const dayNumber = ((startDate - firstDayInYear) / 86400000) + 1;
  return dayNumber
}

console.log(getDayNumber("2023-01-12"));
console.log(getDayNumber("2023-02-26"));

// Return quarter number from date
// I quarter: Jan - Mar
// II quarter: Apr - Jun
// III quarter: Jul - Sep
// IV quarter: Oct - Dec
// getQuarters(date);
// getQuarters("2023-02-26");
// Feb 26 is I quarter

const getQuarters = (date) => {
  const startDate = new Date(date);
  const monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const month = monthList[startDate.getMonth()];
  const dayOfDate = startDate.getDate();
  const quarterlist = {
    'Jan':"I quarter",
    'Feb':"I quarter",
    'Mar':"I quarter",
    'Apr':"II quarter",
    'May':"II quarter",
    'Jun':"II quarter",
    'Jul':"III quarter",
    'Aug':"III quarter",
    'Sep':"III quarter",
    'Oct':"IV quarter",
    'Nov':"IV quarter",
    'Dec':"IV quarter"
  };
  const quart = quarterlist[month];
  return `${month} ${dayOfDate} is ${quart}`;
}

console.log(getQuarters("2023-02-26"))

// Write a function to calculate date diff
// Return value should be a formated string
// If diff is less then hour use minutes format If diff is less then day use hour and minute format
// If diff is less then month use days format If diff is less then year use moth format Everything else can be in years format
// calcDateDiff(startDate, endDate);
// calcDateDiff("2023-02-26 14:00", "2023-02-26 14:20");
// 20 minutes
//calcDateDiff("2023-02-26 14:00", "2023-02-26 15:30");
// 1 hours 30 minutes
//calcDateDiff("2023-02-26 14:00", "2023-02-28 15:30");
// 2 days
//calcDateDiff("2023-02-26 14:00", "2023-05-28 15:30");
// 3 months
//calcDateDiff("2023-02-26 14:00", "2025-05-28 15:30");
// 2 years

const calcDateDiff = (startDate, endDate) => {
  const firstDate = new Date(startDate);
  const secondDate = new Date(endDate);
  const difference = secondDate - firstDate;
  if (difference > 31536000000) {
    return `${Math.trunc(difference / 31536000000)} years`
  } else if (difference > 2592000000) {
    return `${Math.trunc(difference / 2592000000)} months`
  } else if (difference > 86400000) {
    return `${Math.trunc(difference / 86400000)} days`
  } else {
    let minutes = difference / 60000;
    if (minutes >= 60) {
      let hours = Math.trunc(minutes / 60)
      let rest = (minutes - (hours*60));
      return `${hours} hours ${rest} minutes`
    } else {
      return `${minutes} minutes`
    }
  }
}

console.log(calcDateDiff("2023-02-26 14:00", "2025-05-28 15:30"));
console.log(calcDateDiff("2023-02-26 14:00", "2023-05-28 15:30"));
console.log(calcDateDiff("2023-02-26 14:00", "2023-02-28 15:30"));
console.log(calcDateDiff("2023-02-26 14:00", "2023-02-26 15:30"));
console.log(calcDateDiff("2023-02-26 14:00", "2023-02-26 14:20"));

// Create map from array of objects
// Key should be id from object
// Please add more input data
//createMap(arr);
//createMap([
//   { id: 1, value: 1, date: "2022-02-15" },
//   { id: 2, value: 1242, date: "2023-02-15" },
//   { id: 3, value: 3342, date: "2021-02-15" },
// ]);

const arrOfObj = [
  { id: 1, value: 1, date: "2022-02-15" },
  { id: 2, value: 1242, date: "2023-02-15" },
  { id: 3, value: 3342, date: "2021-02-15" },
  { id: 4, value: 5472, date: "2020-01-16" },
  { id: 5, value: 8191, date: "2022-04-22" },
  { id: 6, value: 12648, date: "2023-03-04" }
];
const map1 = new Map();

for (let i = 0; i< arrOfObj.length; i++) {
  map1.set(arrOfObj[i].id,arrOfObj[i]);
}

console.log(map1);

// Create a cache for calcDateDiff
//cacheCalcDateDiff(startDate, endDate);

const map2 = new Map();
const newCalcDateDiff = (startDate, endDate) => {
  const cacheInfo = `${startDate} ${endDate}`;
  let answer;
 if (map2.has(cacheInfo)) {
  answer = map2.get(cacheInfo);
  return answer;
 } else {
  const firstDate = new Date(startDate);
  const secondDate = new Date(endDate);
  const difference = secondDate - firstDate;
  if (difference > 31536000000) {
    answer = `${Math.trunc(difference / 31536000000)} years`;
    map2.set(cacheInfo, answer);
  } else if (difference > 2592000000) {
    answer = `${Math.trunc(difference / 2592000000)} months`;
    map2.set(cacheInfo, answer);
  } else if (difference > 86400000) {
    answer = `${Math.trunc(difference / 86400000)} days`;
    map2.set(cacheInfo, answer);
  } else {
    let minutes = difference / 60000;
    if (minutes >= 60) {
      let hours = Math.trunc(minutes / 60);
      let rest = (minutes - (hours*60));
      answer = `${hours} hours ${rest} minutes`;
      map2.set(cacheInfo, answer);
    } else {
      answer = `${minutes} minutes`;
      map2.set(cacheInfo, answer);
    }
  }
  return answer;
 }
}

console.log(newCalcDateDiff("2023-02-26 14:00", "2025-05-28 15:30"));
console.log(newCalcDateDiff("2023-02-26 14:00", "2023-05-28 15:30"));
console.log(newCalcDateDiff("2023-02-26 14:00", "2023-02-28 15:30"));
console.log(newCalcDateDiff("2023-02-26 14:00", "2023-02-26 15:30"));
console.log(newCalcDateDiff("2023-02-26 14:00", "2023-02-26 14:20"));
console.log(map2);