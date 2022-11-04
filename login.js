function loginFunction() {
    // LOGIC

    // Get the elements
    const pageElements = getElements();
    // get the Value of the elements
    const pageValues = getValuesFromElements(pageElements);
    // check whether the email contains @
    emailChecker(pageValues.emailValues);
    // check whether the password is more than 3 characters
    passwordLengthChecker(pageValues.passwordValues);
    //Log in successful

};

function getElements() {
    const emailElement = document.getElementById('email');
    const passwordElement =document.getElementByID('password');
    return { emailElement, passwordElement };
}

function getValuesFromElements(input) {
    const emailElement = input.emailElement;
    const passwordElement = input.passwordElement;
    
    const emailValue = emailElement.value;
    const passwordValue = passwordElement.Value;

    return {emailValue, passwordValue }

}

function emailChecker(XXXX) {
    if (XXXX.includes('@')) {
        console.log('Valid Email');
    }else {
        alert('Hey, please check your email credentials and try again.');
    }
}
function passwordLengthChecker(input) {
    if (input.length < 3) {
        alert('hey, please enter a password with 3 characters or more');
    }
}
