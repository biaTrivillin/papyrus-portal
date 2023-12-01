const emailUsername = document.querySelector('#email');
const password = document.querySelector('#password');

//---------------------- NOT EMPTY VALIDATION ---------------------- 

let hasInformation = false;
const loginError = document.querySelector('#login__error');

function isNotEmpty() {
    if(emailUsername.value == "" || password.value == "") {
        hasInformation = false;
        loginError.innerHTML = 'preencha todos os campos';
    } else {
        hasInformation = true;
        loginError.innerHTML = '';
    }
}


//---------------------- EMAIL VALIDATION ---------------------- 

let emailUsernameValid = false;
const emailError = document.querySelector('#email__error');

function checkEmail() {
    userList.forEach((item) => {
        if(emailUsername.value == item.userInform || emailUsername.value == item.emailInform) {
            emailUsernameValid = true;
            emailError.innerHTML = '';
        } else {
            emailUsernameValid = false;
            emailError.innerHTML = 'email não cadastrado';
        }
    })
}

//---------------------- PASSWORD VALIDATION ---------------------- 

let userList = [];
const passwordError = document.querySelector('#password__error');


function checkPassword() {

    let userValid = {
        nameValid: '',
        usernameValid: '',
        passwordValid: 'passwuord',
        birthValid: '',
        phoneValid: '',
        genderValid: '',
        emailValid: '',
    }

    userList = JSON.parse(localStorage.getItem('userList'));

    userList.forEach((item) => {
        if((emailUsername.value == item.userInform || emailUsername.value == item.emailInform) && password.value == item.passwordInform) {
            
            userValid = {
                nameValid: item.nameInform,
                usernameValid: item.userInform,
                passwordValid: item.passwordInform,
                birthValid: item.birthInform,
                phoneValid: item.phoneInform,
                genderValid: item.genderInform,
                emailValid: item.emailInform,
            }
        }
    })

    if((emailUsername.value == userValid.usernameValid || emailUsername.value == userValid.emailValid) && password.value == userValid.passwordValid) {
        window.location.href = '../html.next-page.html';
    } else {
        passwordError.innerHTML = 'senha incorreta';
    }
}

//---------------------- LOG IN BTN ---------------------- 

const loginBtn = document.querySelector("#login__button");

loginBtn.addEventListener('click', logIn);

function logIn() {

    isNotEmpty()
    checkPassword()
    checkEmail()
}