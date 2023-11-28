const signUpBtn = document.querySelector('#signup__button');

const nameInput = document.querySelector('#name');
const labelName = document.querySelector('#name__label');

const birth = document.querySelector('#date__of__birth');
const labelBirth = document.querySelector('#birth__label');

const username = document.querySelector('#username');
const labelUsername = document.querySelector('#username__label');

const phone = document.querySelector('#phone__number');
const labelPhone = document.querySelector('#phone__label');

const email = document.querySelector('#email');
const labelEmail = document.querySelector('#email__label');

const password = document.querySelector('#password');
const labelPassword = document.querySelector('#password__label');

const confirmPassword = document.querySelector('#password__confirm');
const labelConfirmPassword = document.querySelector('#passconfirm__label');


signUpBtn.addEventListener('click', submit);

function submit() {
    window.location.href = '../html/sign-up.html'
}


nameInput.addEventListener('keyup', () => {
    if(nameInput.value.length <= 2) {
        labelName.innerHTML = 'Name <strong class="error">Enter at least 3 characters.</strong>'
    } else {
        labelName.innerHTML = 'Name'
    }
})

confirmPassword.addEventListener('keyup', () => {
    if(confirmPassword.value != password.value) {
        labelConfirmPassword.innerHTML = 'Confirm Your Password <strong class="error">The passwords do not match.</strong>'
    } else {
        labelConfirmPassword.innerHTML = 'Confirm Your Password'
    }
})

