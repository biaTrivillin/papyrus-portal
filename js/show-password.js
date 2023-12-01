const showPasswordBtnPassword = document.querySelector('#show__password__password')
const passwordInput = document.querySelector('#password')
const openedEyePassword = document.querySelector('#opened__eye__password')
const closedEyePassword = document.querySelector('#closed__eye__password')


const showPasswordBtnConfirm = document.querySelector('#show__password__confirm')
const passwordConfirmInput = document.querySelector('#password__confirm')
const openedEyeConfirm = document.querySelector('#opened__eye__confirm')
const closedEyeConfirm = document.querySelector('#closed__eye__confirm')





showPasswordBtnPassword.addEventListener('click', () =>  {
    if(passwordInput.type == 'password') {
        passwordInput.type = 'text';
        openedEyePassword.style.display = 'block';
        closedEyePassword.style.display = 'none';
    } else {
        passwordInput.type = 'password';
        openedEyePassword.style.display = 'none';
        closedEyePassword.style.display = 'block';
    }
})

showPasswordBtnConfirm.addEventListener('click', () =>  {
    if(passwordConfirmInput.type == 'password') {
        passwordConfirmInput.type = 'text';
        openedEyeConfirm.style.display = 'block';
        closedEyeConfirm.style.display = 'none';
    } else {
        passwordConfirmInput.type = 'password';
        openedEyeConfirm.style.display = 'none';
        closedEyeConfirm.style.display = 'block';
    }
})

