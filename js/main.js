var navbar = document.querySelector('.navbar');

document.querySelector('#menuBtn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
};

var searchForm = document.querySelector('.searchForm');

document.querySelector('#searchBtn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}