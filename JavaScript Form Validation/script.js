const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age');
const userlocation = document.getElementById('location');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm-password');

form.addEventListener('submit', e=>{
    e.preventDefault();
    validateInputs();
    alertData();
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () => {
    const usernameValue = username.value;
    const ageValue = age.value.trim();
    const userlocationValue = userlocation.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if(usernameValue === ''){ setError(username, 'Name is required'); }
    else{ setSuccess(username); }
    
    if(ageValue === ''){ setError(age, 'Age is required'); }
    else{ setSuccess(age); }
    
    if(userlocationValue === ''){ setError(userlocation, 'Location is required'); }
    else{ setSuccess(userlocation); }
    
    if(emailValue === ''){ setError(email, 'Email is required'); }
    else if (!isValidEmail(emailValue)) { setError(email, 'Email is not valid'); }
    else{ setSuccess(email); }

    if(passwordValue === ''){ setError(password, 'Password is required'); }
    else if(passwordValue.length < 8){ setError(password, 'Password must be at least 8 characters'); }
    else { setSuccess(password); }

    if(password2Value === ''){ setError(password2, 'Please confirm your password'); }
    else if (password2Value !== passwordValue) { setError(password2, 'Passwords do not match'); }
    else { setSuccess(password2); }
};

 const alertData = () => {
    alert(`Username: ${ username.value }\nAge: ${ age.value }\nLocation: ${ userlocation.value }\nEmail: ${ email.value }\nPassword: ${ password.value }`);
 }