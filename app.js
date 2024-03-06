const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const yearDisplay = document.querySelector("#yr");
const monthDisplay = document.querySelector("#mnth");
const dayDisplay = document.querySelector("#dys");
const button = document.getElementById("btn");
const errors = document.querySelectorAll("#error");
const labels = document.querySelectorAll("label");
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");
const form = document.querySelector("form");

const isRequired = (value) => (value === "" ? false : true);

function getYearsOld() {
  let today = new Date().getDate();
  let thisYear = new Date().getFullYear();
  let thisMonth = new Date().getMonth();
  let realMonth = thisMonth + 1;
  if (month.value > realMonth) {
    yearDisplay.textContent = thisYear - year.value - 1;
    monthDisplay.textContent = 12 - month.value + realMonth;
    dayDisplay.textContent = 30 - day.value;
  } else if (month.value < realMonth) {
    yearDisplay.textContent = thisYear - year.value;
    monthDisplay.textContent = thisMonth - month.value;
    dayDisplay.textContent = 30 - day.value;
  } else if (month.value == realMonth && day.value > today) {
    yearDisplay.textContent = thisYear - year.value - 1;
    monthDisplay.textContent = 12 - month.value + thisMonth;
    dayDisplay.textContent = 30 - day.value;
  } else {
    yearDisplay.textContent = thisYear - year.value;
    monthDisplay.textContent = realMonth - month.value;
    dayDisplay.textContent = today - day.value;
  }
}

const dayValid = () => {
  if (day.value > 31) {
    errorDay.textContent = "Must be a valid day";
  } else {
    errorDay.textContent = "";
  }
};

const monthValid = () => {
  if (month.value > 12) {
    errorMonth.textContent = "Must be a valid month";
  } else {
    errorMonth.textContent = "";
  }
};

const yearValid = () => {
  if (year.value > new Date().getFullYear()) {
    errorYear.textContent = "Must be in the past";
  } else {
    errorYear.textContent = "";
  }
};

const checkDay = () => {
  const dob = day.value;
  if (!isRequired(dob)) {
    errorDay.textContent = "this field is required";
  } else {
    dayValid();
  }
};

const checkMonth = () => {
  const mob = month.value;
  if (!isRequired(mob)) {
    errorMonth.textContent = "this field is required";
  } else {
    monthValid();
  }
};

const checkYear = () => {
  const yob = year.value;
  if (!isRequired(yob)) {
    errorYear.textContent = "this field is required";
  } else {
    yearValid();
  }
};

form.addEventListener("input", (e) => {
  switch (e.target.id) {
    case "day":
      checkDay();
      break;
    case "month":
      checkMonth();
      break;
    case "year":
      checkYear();
      break;
  }
});

button.addEventListener("click", (e) => {
 e.preventDefault();
  
});
