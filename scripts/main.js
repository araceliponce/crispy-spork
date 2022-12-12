const daysInJanuary = getDaysInMonth(2025, 1);
console.log(daysInJanuary); //>31

let todayName = new Date().toLocaleDateString('es', { weekday: 'long' }); //>lunes   >newDate().getDay gives the number of day, like 3 for wednesday

let todayNumber = new Date().getDate(); //numbers of day

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1; // since months are 0-based
const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
console.log(daysInCurrentMonth);


//FUNCTIONS
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1);
}

const firstDayCurrentMonth = getFirstDayOfMonth(
  date.getFullYear(),
  date.getMonth(),
);
console.log(firstDayCurrentMonth); //> Thu Dec 01 2022

firstDayCurrentMonth.getDay(); //4 (jueves)

const firstDayJanuary = getFirstDayOfMonth(2023, 0);
console.log(firstDayJanuary); // Wed Jan 01 2025


//LOOPS
//35 instead of daysInCurrentMonth
for (i = 0; i < daysInCurrentMonth; i++) {
  let btnDia = document.createElement('button');
  let dia = document.createElement('time');
  dia.innerHTML = i + 1; //so it starts from 1 not 0

  btnDia.appendChild(dia);

  if (dia.innerHTML == todayNumber) {
    dia.parentElement.classList.add('today')
  }
  document.querySelector('.calendar__dates').appendChild(btnDia);
}
let firstDayBtn = document.querySelector('.calendar__dates button:first-of-type');
console.log(firstDayBtn)
firstDayBtn.style.gridColumn = firstDayCurrentMonth.getDay();

