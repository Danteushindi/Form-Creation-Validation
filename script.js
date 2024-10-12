document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

let isValid = true;

let messages = [];

const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const usernameInput = document.getElementById('username');
	const usernameError = document.getElementById('usernameError');
    
	if (usernameInput.value.length < 3) {
		isvalid = false;
		messages.push(usernameError.textContent = 'Username must be at least 3 characters long.');
		return;
	}
	else {
		usernameError.textContent = '';
	}
    
    const usernameInputTrimmed = usernameInput.value.trim();

	const emailInput = document.getElementById('email');
	const emailError = document.getElementById('emailError');

	if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
		isValid = false;
		messages.push(emailError.textContent = 'Please enter a valid email address.');
		return;
	}
    else {
    	emailError.textContent = '';
    }
    
    const emailInputTrimmed = emailInput.value.trim();

    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (passwordInput.value.length < 8) {
    	isValid = false;
    	messages.push(passwordError.textContent = 'Password must be at least 8 characters long.');
        return;
    } 
    else {
        passwordError.textContent = '';
    }
    
    const passwordInputTrimmed = passwordInput.value.trim();

    const feedbackDiv = document.getElementById('form-feedback').style.display = "block";

    if (isValid == true) {
    	feedbackDiv.textContent = 'Registration successful!';
    	feedbackDiv.style.color = "#28a745";
    }

    else {
    	document.getElementById('form-feedback').innerHTML = "Error Message : "${messages};
    }

    

    form.submit();
});





