let lists = document.querySelector('.list-customer');
let item = document.querySelectorAll('.item-customer');
let left = document.getElementById('left');
let right = document.getElementById('right');
let dot = document.querySelectorAll('li.dot-item');
let active = 0;
let lengthItem = item.length - 1;
//let autoSlides = setInterval(() => {right.click()}, 5000)
let auto = setInterval(() => {right.click()}, 5000)
right.onclick = function(){
    if(active + 1 > item.length){
        active=0
    }else{
        active+=1
    }
    Reload()
}
left.onclick = function() {
    if(active - 1 < 0){
        active = lengthItem;
    }else{
        active-=1;
    }
    Reload();
}
dot.forEach((li,key)=>{
    li.addEventListener('click', function(){
        active = key;
        Reload();
    })
})
function Reload() {
    let checkLeft = item[active].offsetLeft;
    lists.style.left = -checkLeft +'px'
    let lastActive = document.querySelector('li.dot-active')
    lastActive.classList.remove('dot-active')
    dot[active].classList.add('dot-active')
    clearInterval(auto);
    auto = setInterval(() => {right.click()}, 4000)
}