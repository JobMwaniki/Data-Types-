function loginFunction() {
  // LOGIC

  // Get the elements
  const pageElements = getElements();
  // get the Value of the elements
  const pageValues = getValuesFromElements(pageElements);
  // check whether the email contains @
  emailChecker(pageValues.emailValue);
  // check whether the password is more than 3 characters
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
const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
const femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']