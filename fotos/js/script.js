//DOM



const alvo = document.querySelector('#alvo')
const bttheprince = document.querySelector('#bt1')
const btthereddevil = document.querySelector('#bt2')
const btlapulga = document.querySelector('#bt3')

//eventos

bttheprince.addEventListener('click', theprince)
btthereddevil.addEventListener('click',thereddevil)
btlapulga.addEventListener('click',lapulga)


//ação

function theprince(){
    alvo.src = 'img/neymar-neymar-jr.gif'
}

function thereddevil(){
    alvo.src = 'img/cr7.gif'
}

function lapulga(){
    alvo.src = 'img/messi-aura.gif'
}
