let  navTabs = document.querySelectorAll('body');
navTabs.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('nav_item')){
            let lastActive = item.querySelector('li.active');
            let newActive = event.target;
            lastActive.classList.remove('active');
            lastActive.classList.remove('nav-active');
            newActive.classList.add('active');
            newActive.classList.add('nav-active');
            let lastContentActive = item.querySelector('.main.active');
            let newContentActive = document.getElementById(newActive.dataset.target);
            lastContentActive.classList.remove('active');
            newContentActive.classList.add('active');
        }
    })
})