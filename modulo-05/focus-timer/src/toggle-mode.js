let darkMode = true
const buttonToggle = document.querySelector('#toggleMode')

buttonToggle.addEventListener('click', event =>{
    document.documentElement.classList.toggle('light')

    let mode = darkMode ? 'light' : 'dark'

    event.currentTarget.querySelector('span')
    .textContent = `${mode} mode ativado!`

    darkMode = !darkMode
})