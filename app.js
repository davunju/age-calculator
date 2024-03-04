const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const yearDisplay = document.querySelector("#yr");
const monthDisplay = document.querySelector("#mnth");
const dayDisplay = document.querySelector("#dys");
const button = document.getElementById("btn");
const errors = document.querySelectorAll("#error");
const labels = document.querySelectorAll("label");

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

errors.forEach((error) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const dob = day.value,
      mob = month.value,
      yob = year.value;
    if (!isRequired(dob) || !isRequired(mob) || !isRequired(yob)) {
      error.textContent = "This field is required";
      labels.forEach((label) => {
        label.style.color = "hsl(0, 100%, 67%)";
      });
    } else {
      error.textContent = "";
      labels.forEach((label) => {
        label.style.color = "hsl(0, 1%, 44%)";
      });
      getYearsOld();
    }
  });
});
