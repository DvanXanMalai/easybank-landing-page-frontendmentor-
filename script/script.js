const hamburger = document.getElementById('burger');
const navigation = document.querySelector('.primary-navigation');
const overlay = document.querySelector('.overlay');
hamburger.addEventListener('click', ()=>{
    navigation.classList.toggle('nav-active');
    overlay.classList.toggle('dark-overlay');
})