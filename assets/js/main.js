// Бургер меню
const burger = document.querySelector(".burger");
burger.addEventListener('click',()=>{
    burger.classList.toggle('active-burger')
    document.body.classList.toggle('hiden')
    document.querySelector('nav').classList.toggle('active')
})

// Инициализация слайдера
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });