const btn = document.querySelector('button')

if (localStorage.getItem('token') == null) {
    window.location.href = '../index.html'
}

btn.addEventListener('click', () => {
    localStorage.removeItem('token')
    window.location.href = '../index.html'

})