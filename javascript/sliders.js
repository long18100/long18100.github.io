
login.onclick = function(){
    window.location.href = 'login.html';
}
// SLIDER
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let autoSlides = setInterval(() => {next.click()}, 5000)
prev.onclick = function(){
    let list = document.querySelectorAll('.item-slide');
    document.querySelector('.box-slide').appendChild(list[0])
}
next.onclick = function(){
    let list = document.querySelectorAll('.item-slide');
    document.querySelector('.box-slide').prepend(list[list.length - 1])
}

document.getElementById('next-card').onclick = function(){
    const widthItem = document.querySelector('.item-card').offsetWidth;
    document.querySelector('.product-card').scrollLeft += widthItem;
}
document.getElementById('prev-card').onclick = function(){
    const widthItem = document.querySelector('.item-card').offsetWidth;
    document.querySelector('.product-card').scrollLeft -= widthItem;
}
function Reload2() {
    clearInterval(autoSlides)
    autoSlides = setInterval(() => {next.click()}, 4000)
}
Reload2()