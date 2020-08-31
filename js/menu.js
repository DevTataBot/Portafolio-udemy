const navSlide = ()=>{
    const hamburguer = document.querySelector('.hamburguer')
    const menu = document.querySelector('.menu-navegacion')
    var menuItems = document.querySelectorAll('.menu-navegacion a')
    hamburguer.addEventListener('click',()=>{
        menu.classList.toggle('spread');
        for(var i = 0; i<menuItems.length; i++){
            menuItems[i].addEventListener('click',()=>{
                menu.classList.remove('spread')
            })
        }
    })   
}
navSlide()


