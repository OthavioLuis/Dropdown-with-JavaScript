let icon = document.querySelector('.lista-li-1')
let icon2 = document.querySelector('.lista-li-2')
let img1 = document.getElementById('seta1')
let img2 = document.getElementById('seta2')

function mostrar2() {
    icon.style.display = 'none'
    icon2.style.display = 'block'
}
function mostrar() {
    icon.style.display = 'block'
    icon2.style.display = 'none'
}
function ocultar() {
    icon.style.display = 'none'
    icon2.style.display = 'none'
}