function loginFunction() {
    // LOGIC

    // Get the elements
    const pageElements = getElements();
    // get the Value of the elements
    const pageValues = pageValuesFromElement(pageElements);
    // check whether the email contains @
    emailChecker(pageValues.emailValues);
    // check whether the password is more than 3 characters
    passwordLengthChecker(pageValues.passwordValues);
    //Log in successful

};

function getElements() {
    const emailElement = document.getElementById('email');
    const passwordElement =documents.getElementByID('password');
    return { emailElement, passwordElement };
}

function getvaluesfromElements(input) {
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
        alert('hey, please check youe email');
    }
}
function passwordLengthChecker(input) {
    if (input.length<3) {
        alert('hey, please enter a password with 3 characters or more');
    }
}
