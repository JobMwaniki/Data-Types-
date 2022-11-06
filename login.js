function loginFunction() {
  // LOGIC

  // Get the elements
  const pageElements = getElements();
  // get the Value of the elements
  const pageValues = getValuesFromElements(pageElements);
  // check whether the date is less than 31
  emailChecker(pageValues.emailValue);
  // check whether gender is male or Female
  passwordLengthChecker(pageValues.passwordValue);
  //Log in successful
}

function getElements() {
  const dateElement = document.getElementById("date");
  const genderElement = document.getElementByID("gender");
  return { dateElement, genderElement };
}

function getValuesFromElements(input) {
  const dateElement = input.dateElement;
  const genderElement = input.genderElement;

  const dateValue = dateElement.value;
  const genderValue = genderElement.Value;

  return { dateValue, genderValue };
}

function dateChecker(XXXX) {
  if (XXXX.includes("@")) {
    console.log("Valid Email");
  } else {
    alert("Hey, please check your email credentials and try again.");
  }
}
function genderChecker(input) {
  if (input. gender < 3) {
    alert("hey, please enter a password with 3 characters or more");
  }
}
const dayOfWeek = RESULTOFFORMULA
const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
const myName = maleNames [dayOfWeek-1]


const dayWeek = RESULTOFFORMULA
const femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
const myName = femaleNames [dayWeek-1]