const imagenes = document.querySelectorAll('.img-galeria')
const imgLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer')

const ligh = ()=>{
    imagenes.forEach(imagen =>{
        imagen.addEventListener('click',()=>{
            apareceImg(imagen.getAttribute('src'))
        })
    })
}
contenedorLight.addEventListener('click',()=>{
    contenedorLight.classList.toggle('show')
    imgLight.classList.toggle('show-image')
    hamburguer1.style.opacity='1'
})
const apareceImg = (imagen)=>{
    imgLight.src = imagen
    contenedorLight.classList.toggle('show')
    imgLight.classList.toggle('show-image')
    hamburguer1.style.opacity='0'
}
ligh()