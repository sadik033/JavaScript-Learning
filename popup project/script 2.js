const button = document.querySelector('button')
const popup = document.querySelector('.popup-container')
const close = document.querySelector('.close-icon')
const popupStop = document.querySelector('.popup')
const submit = document.querySelector('.submit')

button.addEventListener('click', () =>{
    popup.classList.add('popup-open')
})

close.addEventListener('click', () =>{
    popup.classList.remove('popup-open')
})
popup.addEventListener('click', () =>{
    popup.classList.remove('popup-open')
})
popupStop.addEventListener('click', (e) =>{
    e.stopPropagation()
})
submit.addEventListener('click', () =>{
    popup.classList.remove('popup-open')
})

