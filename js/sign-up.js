//---------------------- NAME VALIDATION ---------------------- 

const nameInput = document.querySelector('#name');
const errorName = document.querySelector('#error__name');
let validName = false;


nameInput.addEventListener('keyup', () => {
    if(nameInput.value.length <= 2) {
        validName = false;
        errorName.style.opacity = 1
    } else {
        validName = true;
        errorName.style.opacity = 0
    }
})

//---------------------- DATE OF BIRTH VALIDATION ---------------------- 

const birth = document.querySelector('#date__of__birth');
const errorBirth = document.querySelector('#error__birth');
let validBirth = false;

birth.addEventListener('keyup', () => {
    if(birth.value.length <= 8) {
        validBirth = false;
        errorBirth.style.opacity = 1
    } else {
        validBirth = true;
        errorBirth.style.opacity = 0
    }
})

//---------------------- USERNAME VALIDATION ---------------------- 

const username = document.querySelector('#username');
const errorUsername = document.querySelector('#error__username');
let validUsername = false;

username.addEventListener('keyup', () => {
    if(username.value.length <= 2) {
        validUsername = false;
        errorUsername.style.opacity = 1
    } else {
        validUsername = true;
        errorUsername.style.opacity = 0
    }
})

//---------------------- PHONE NUMBER VALIDATION ---------------------- 

const phone = document.querySelector('#phone__number');
const errorPhone = document.querySelector('#error__phone');
let validPhone = false;

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

//---------------------- EMAIL VALIDATION ---------------------- 

const email = document.querySelector('#email');
const errorEmail = document.querySelector('#error__email');
let validEmail = false

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

//---------------------- PASSWORD VALIDATION ---------------------- 

const password = document.querySelector('#password');
let validPassword = false;

const errorPassword = document.querySelector('#error__password__container')
const errorPasswordSpanNumber = document.querySelector('#error__password__two')
const errorPasswordSpanLoewrCase = document.querySelector('#error__password__three')
const errorPasswordSpanUpperCase = document.querySelector('#error__password__four')
const errorPasswordSpanSpecialCarac = document.querySelector('#error__password__five')
const errorPasswordSpanEightCarac = document.querySelector('#error__password__six')


const errorGender = document.querySelector('#error__gender')

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

//---------------------- CONFIRM PASSWORD VALIDATION ---------------------- 

const confirmPassword = document.querySelector('#password__confirm');
const errorConfPassword = document.querySelector('#error__confirm__password')
let validConfPassword = false;


confirmPassword.addEventListener('keyup', () => {
    if(confirmPassword.value != password.value) {
        validConfPassword = false;
        errorConfPassword.style.opacity = 1
    } else {
        validConfPassword = true;
        errorConfPassword.style.opacity = 0
    }
})

//---------------------- TERMS CHECKBOX VALIDATION ---------------------- 

let terms = document.getElementById('terms')
let labelTerms = document.querySelector('.terms__text')
let validTerms 

function checkTerms() {
    validTerms = terms.checked

    if(validTerms == false) {
        labelTerms.innerHTML = 'I have read and am aware of the terms regarding the processing of my data as described in the Privacy Policy of the website. <strong class="error__strong"> You must agree to the terms to proceed. </strong>'
    } else {
        labelTerms.innerHTML = 'I have read and am aware of the terms regarding the processing of my data as described in the Privacy Policy of the website.'
    } 
}

//---------------------- GENDER VALIDATION ----------------------
const radio = document.querySelectorAll('.radio__button')
let gender

function showGenderValue() {
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            gender = radio[i].value
        }
    }
}

const radioOne = document.querySelector("#radio__one");
const radioTwo = document.querySelector("#radio__two");
const radioThree = document.querySelector("#radio__three");

let validGender = false

function checkRadio() {

    if(radioOne.checked || radioTwo.checked || radioThree.checked) {
        validGender = true
        errorGender.style.opacity = 0;
    } else {
        validGender = false
        errorGender.style.opacity = 1;
    }
}

//---------------------- SUBMIT ----------------------

const signUpBtn = document.querySelector('#signup__button');

signUpBtn.addEventListener('click', submit);

const submitError = document.querySelector('#submit__error');

function submit() {
    checkTerms()

    checkRadio()

    showGenderValue()

    if(validName && validBirth && validUsername && validEmail && validConfPassword && validTerms && validPassword && validGender && validPhone) {
        submitError.style.opacity = 0;

        let userList = JSON.parse(localStorage.getItem('userList') || '[]')

        userList.push(
            {
                nameInform: nameInput.value,
                userInform: username.value,
                passwordInform: password.value,
                birthInform: birth.value,
                phoneInform: phone.value,
                genderInform: gender,
                emailInform: email.value,
            }
        )

        localStorage.setItem('userList', JSON.stringify(userList))

        window.location.href = '../index.html'

    } else {
        submitError.style.opacity = 1;
    }    
}








