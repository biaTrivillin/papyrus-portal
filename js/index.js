// ---------------------- TOGGLE ----------------------

const toggleIcon = document.querySelector('#toggle__icon');
const toggleTitle = document.querySelector('#toggle__title')
const toggleText = document.querySelector('#toggle__text')
let contador = 0;

toggleIcon.addEventListener('click', showToggle);
toggleTitle.addEventListener('click', showToggle);

function showToggle() {
    contador++

    if(!Number.isInteger(contador/2)) {

        toggleIcon.style.fill = '#F26D78'
        toggleTitle.style.color = '#F26D78'

        toggleText.style.display = 'flex' 

        toggleIcon.animate(
            [
                { transform: 'rotate(180deg)'},
            ],
    
            {
                duration: 500,
                iterations: 1,
                fill: "forwards",
            },
        )

        toggleText.animate(
            [
                { opacity: 1},
            ],
    
            {
                duration: 1000,
                iterations: 1,
                fill: "forwards",
            },
        )

    } else {  
        toggleIcon.style.fill = '#295E73'
        toggleTitle.style.color = '#295E73' 
        
        toggleIcon.animate(
            [
                { transform: 'rotate(90deg)'},
            ],
    
            {
                duration: 500,
                iterations: 1,
                fill: "forwards",
            },
        )

        toggleText.animate(
            [
                { opacity: 0},
            ],
    
            {
                duration: 500,
                iterations: 1,
                fill: "forwards",
            },
        )

        setTimeout( () => {
            toggleText.style.display = 'none';
        },500);
        
    }
}

// ---------------------- CONTACT BUTTON ----------------------

const contactButton = document.querySelector('#contact__button');

contactButton.addEventListener('click', sendEmail);

function sendEmail() {
    window.location.href = "mailto:biatrivillin.code@gmail.com"
}