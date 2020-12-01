const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentDate = new Date(); //Tue Dec 01 2020 16:43:43 GMT+0100 (Central European Standard Time)
let currentDay = currentDate.getDate(); //1
let currentMonthIndex = currentDate.getMonth(); //11
let currentYear = currentDate.getFullYear(); //2020

//DOM
const dates = document.querySelector(".dates");
const month = document.querySelector(".today h1");
let prevMonth = document.querySelector(".previous-month");
let nextMonth = document.querySelector(".next-month");

month.textContent = `${months[currentMonthIndex]}, ${currentYear}`;

prevMonth.addEventListener("click", () => lastMonth());
nextMonth.addEventListener("click", () => followingMonth());

function paintMonth(month) {
  for (let i = startDay(); i > 0; i--) {
    dates.innerHTML += `<div class="date previous-date">${getDaysOfMonth(currentMonthIndex - 1) - (i - 1)}</div>`;
  }
  for (let i = 1; i <= getDaysOfMonth(month); i++) {
    if (i === currentDay) {
      dates.innerHTML += `<div class="date today">${i}</div>`;
    } else {
      dates.innerHTML += `<div class="date">${i}</div>`;
    }
  }
}

function getDaysOfMonth(month) {
  if (month === -1) {
    month = 11;
  }
  if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
    return 31;
  }
  if (month == 3 || month == 5 || month == 8 || month == 10) {
    return 30;
  } else {
    return leap() ? 29 : 28;
  }
}

function leap() {
  return (currentYear % 100 !== 0 && currentYear % 4 === 0) || currentYear % 400 === 0;
  // Set 3 leap year conditions
}

function startDay() {
  const start = new Date(currentYear, currentMonthIndex, 1); //Tue Dec 01 2020 16:43:43 GMT+0100 (Central European Standard Time)
  return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
  // .getDay() : Start a week on monday so -1. (Otherwise -1 no need)
  // but as sunday's index is 0, on sunday the number becomes -1.
  // So on sunday, the number changes to 6. Otherwise start.getDay()-1;
  // Week starts from Sunday : start.getDay();
  // Week starts from Monday : start.getDay() -1;
}

function lastMonth() {
  if (currentMonthIndex !== 0) {
    currentMonthIndex -= 1;
  } else {
    currentMonthIndex = 11;
    currentYear -= 1;
  }
  setNewDate();
}

function followingMonth() {
  if (currentMonthIndex !== 11) {
    currentMonthIndex++;
  } else {
    currentMonthIndex = 0;
    currentYear++;
  }
  setNewDate();
}

function setNewDate() {
  currentDate.setFullYear(currentYear, currentMonthIndex, currentDay);
  month.textContent = `${months[currentMonthIndex]}, ${currentYear}`;
  dates.textContent = " ";
  paintMonth(currentMonthIndex);
}

function init() {
  paintMonth(currentMonthIndex);
}
init();
