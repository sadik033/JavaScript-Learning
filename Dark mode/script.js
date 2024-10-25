const fullDarkMode = document.querySelector('#full-dark-mode')

fullDarkMode.addEventListener('change',(e)=>{
    if(fullDarkMode.checked){
        document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
    }
})