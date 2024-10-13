document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

var isValid = true;
let messages = [];

const feedbackDiv = document.getElementById('form-feedback');

const form = document.getElementById('registration-form');


const checkUsername = () => {

    isValid = false;

    const min = 3,
          max = 25;

    const username = usernameInput.value.trim();

    if (!isRequired(username)) {
        showError(usernameInput, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameInput, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameInput);
        isValid = true;
    }
    return isValid;
}

const checkEmail = () => {
    isValid = false;

    const email = emailInput.value.trim();

    if (!isRequired(email)) {
        showError(emailInput, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailInput, 'Email is not valid.')
    } else {
        showSuccess(emailInput);
        isValid = true;
    }
    return isValid;
}

const checkPassword = () => {

    isValid = false;

    const password = passwordInput.value.trim();

    if (!isRequired(password)) {
        showError(passwordInput, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordInput, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordInput);
        isValid = true;
    }
    return isValid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, messages) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('form-feedback');
    error.textContent = messages;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('form-feedback');
    error.textContent = '';
}


form.addEventListener('submit', function(event) {
	event.preventDefault();
    
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        
    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));
	
	





