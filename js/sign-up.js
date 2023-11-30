const signUpBtn = document.querySelector('#signup__button');

const nameInput = document.querySelector('#name');
const errorName = document.querySelector('#error__name');
let validName = false;

const birth = document.querySelector('#date__of__birth');
const errorBirth = document.querySelector('#error__birth');
let validBirth = false;


const username = document.querySelector('#username');
const errorUsername = document.querySelector('#error__username');
let validUsername = false;


const phone = document.querySelector('#phone__number');
const errorPhone = document.querySelector('#error__phone');
let validPhone = false;


const email = document.querySelector('#email');
const errorEmail = document.querySelector('#error__email');
let validEmail = false


const password = document.querySelector('#password');
// const errorPassword = document.querySelector('#error__password');
let validPassword = false;


const confirmPassword = document.querySelector('#password__confirm');
const errorConfPassword = document.querySelector('#error__confirm__password')
let validConfPassword = false;

nameInput.addEventListener('keyup', () => {
    if(nameInput.value.length <= 2) {
        validName = false;
        errorName.style.opacity = 1
    } else {
        validName = true;
        errorName.style.opacity = 0
    }
})

birth.addEventListener('keyup', () => {
    if(birth.value.length <= 8) {
        validBirth = false;
        errorBirth.style.opacity = 1
    } else {
        validBirth = true;
        errorBirth.style.opacity = 0
    }
})

username.addEventListener('keyup', () => {
    if(username.value.length <= 2) {
        validUsername = false;
        errorUsername.style.opacity = 1
    } else {
        validUsername = true;
        errorUsername.style.opacity = 0
    }
})

phone.addEventListener('keyup', () => {
    phone.value = phone.value.replace(/\D/g,'')
    phone.value = phone.value.replace(/(\d{2})(\d)/,"($1) $2")
    phone.value = phone.value.replace(/(\d)(\d{4})$/,"$1-$2")

    if(phone.value.length <= 13) {
        validPhone = false;
        errorPhone.style.opacity = 1
    } else {
        validPhone = true;
        errorPhone.style.opacity = 0
    }
})

email.addEventListener('keyup', () => {
    if(checkEmail(email.value) !== true) {
        validEmail = false;
        errorEmail.style.opacity = 1
    } else {
        validEmail = true;
        errorEmail.style.opacity = 0
    }
})

function checkEmail(email) {
    let emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email); 
}

const errorPassword = document.querySelector('#error__password__container')
const errorPasswordSpanNumber = document.querySelector('#error__password__two')
const errorPasswordSpanLoewrCase = document.querySelector('#error__password__three')
const errorPasswordSpanUpperCase = document.querySelector('#error__password__four')
const errorPasswordSpanSpecialCarac = document.querySelector('#error__password__five')
const errorPasswordSpanEightCarac = document.querySelector('#error__password__six')


password.addEventListener('keyup', () => {
    if(checkPasswordEightCarac(password.value) !== true) {
        errorPasswordSpanEightCarac.style.color = 'red'
    } else {
        errorPasswordSpanEightCarac.style.color = 'green'
    }

    if(checkPasswordNumber(password.value) !== true) {
        errorPasswordSpanNumber.style.color = 'red'
    } else {
        errorPasswordSpanNumber.style.color = 'green'
    }

    if(checkPasswordLowerCase(password.value) !== true) {
        errorPasswordSpanLoewrCase.style.color = 'red'
    } else {
        errorPasswordSpanLoewrCase.style.color = 'green'
    }

    if(checkPasswordUpperCase(password.value) !== true) {
        errorPasswordSpanUpperCase.style.color = 'red'
    } else {
        errorPasswordSpanUpperCase.style.color = 'green'
    }

    if(checkPasswordSpecialCarac(password.value) !== true) {
        errorPasswordSpanSpecialCarac.style.color = 'red'
    } else {
        errorPasswordSpanSpecialCarac.style.color = 'green'
    }

    if((checkPasswordSpecialCarac(password.value) == true) && (checkPasswordUpperCase(password.value) == true) && (checkPasswordLowerCase(password.value) == true) && (checkPasswordNumber(password.value) == true) && (checkPasswordEightCarac(password.value) == true)) {
        errorPassword.style.display = 'none'
        validPassword = true
    } else {
        errorPassword.style.display = 'flex'
        validPassword = false
    }
})

function checkPasswordNumber(password) {
    let passwordPatternNumber =  /(?=.*\d)/; 
    return passwordPatternNumber.test(password); 
}

function checkPasswordLowerCase(password) {
    let passwordPatternLowerCase =  /(?=.*[a-z])/; 
    return passwordPatternLowerCase.test(password); 
}

function checkPasswordUpperCase(password) {
    let passwordPatternUpperCase =  /(?=.*[A-Z])/; 
    return passwordPatternUpperCase.test(password); 
}

function checkPasswordSpecialCarac(password) {
    let passwordPatternSpecialCarac =  /(?=.*[$*&@#])/; 
    return passwordPatternSpecialCarac.test(password); 
}

function checkPasswordEightCarac(password) {
    let passwordPatternEightCarac =  /^[0-9a-zA-Z$*&@#]{8,}$/; 
    return passwordPatternEightCarac.test(password); 
}

confirmPassword.addEventListener('keyup', () => {
    if(confirmPassword.value != password.value) {
        validConfPassword = false;
        errorConfPassword.style.opacity = 1
    } else {
        validConfPassword = true;
        errorConfPassword.style.opacity = 0
    }
})


signUpBtn.addEventListener('click', submit);


const submitError = document.querySelector('#submit__error');

let terms = document.getElementById('terms')
let labelTerms = document.querySelector('.terms__text')

function submit() {
    let validTerms = terms.checked

    if(validTerms == false) {
        labelTerms.innerHTML = 'I have read and am aware of the terms regarding the processing of my data as described in the Privacy Policy of the website. <strong class="error__strong"> Tem que clicar aqui carai! </strong>'
    } else {
        labelTerms.innerHTML = 'I have read and am aware of the terms regarding the processing of my data as described in the Privacy Policy of the website.'
    }  

    if(validName && validBirth && validUsername && validEmail && validConfPassword && validTerms && validPassword) {
        submitError.style.opacity = 0;
    } else {
        submitError.style.opacity = 1;
    }
}





