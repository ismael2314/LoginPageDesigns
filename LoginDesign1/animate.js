const lbtn = document.querySelector("#Lbtn")
const sbtn = document.querySelector("#Sbtn") 
const lform = document.querySelector("#signin")
const sform = document.querySelector("#signup")
lbtn.addEventListener('click',(e)=>{
    sform.classList.toggle('rot-signup')
    lform.classList.toggle('rot-signin')
})

sbtn.addEventListener('click',(e)=>{
    sform.classList.toggle('rot-signup')
    lform.classList.toggle('rot-signin')
})
