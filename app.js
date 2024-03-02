const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const yearDisplay = document.querySelector("#yr");
const monthDisplay = document.querySelector("#mnth");
const dayDisplay = document.querySelector("#dys");
const button = document.getElementById("btn");
//const dayError = document.querySelector("#error1");
//const monthError = document.querySelector("#error2");
//const yearError = document.querySelector("#error3");
const errors = document.querySelectorAll("#error");
const form = document.getElementById("form");

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

/*const showError = (message) => {
  const dayError = document.querySelector("#error1");
  const monthError = document.querySelector("#error2");
  const yearError = document.querySelector("#error3");
  dayError.textContent = message;
  monthError.textContent = message;
  yearError.textContent = message;
};
*/
errors.forEach((error) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const dob = day.value,
      mob = month.value,
      yob = year.value;
    if (!isRequired(dob) || !isRequired(mob) || !isRequired(yob)) {
      error.textContent = "This field is required";
    } else {
      error.textContent = "";
      getYearsOld();
    }
  });
});
