const bars = document.getElementById('bars');
const sideNav = document.getElementById('side-nav');
const closeBtn = document.getElementById('cross');

bars.addEventListener('click',(e)=>{
    e.preventDefault();
    
    sideNav.classList.remove('hidden');
    sideNav.classList.add('block');
    bars.classList.add('hidden');
})

closeBtn.addEventListener('click',(e)=>{
    bars.classList.remove('hidden');
    bars.classList.add('block');
    sideNav.classList.remove('block');
    sideNav.classList.add('hidden')
})
