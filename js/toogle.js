const togleBtn = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close-btn')
const sideBar = document.querySelector('.toggle-side-bar');


togleBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active');
    sideBar.classList.add('animate');
})

closeBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active');
    sideBar.classList.add('animate');
})