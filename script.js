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

const arrowAnchor = document.getElementById('arrow-anchor');
const featuresDropdown = document.getElementById('features-dropdown');
const arrDown = document.getElementById('arr-down');
const arrUp = document.getElementById('arr-up');

arrowAnchor.addEventListener('click',(e)=>{
    e.preventDefault();
    if(featuresDropdown.classList.contains('hidden')){
        featuresDropdown.classList.remove('hidden');
        featuresDropdown.classList.add('block');
        arrDown.classList.remove('hidden');
        arrUp.classList.add('hidden');
    }
    else{
        featuresDropdown.classList.remove('block');
        featuresDropdown.classList.add('hidden');
        arrDown.classList.add('hidden');
        arrUp.classList.remove('hidden');
    }
})
const arrowAnchorId = document.getElementById('arrow-anchor-id');
const featuresDropdownId = document.getElementById('features-dropdown-id');
const arrDownId = document.getElementById('arr-down-id');
const arrUpId = document.getElementById('arr-up-id');

arrowAnchor.addEventListener('click',(e)=>{
    e.preventDefault();
    if(featuresDropdownId.classList.contains('hidden')){
        featuresDropdownId.classList.remove('hidden');
        featuresDropdownId.classList.add('block');
        arrDownId.classList.remove('hidden');
        arrUpId.classList.add('hidden');
    }
    else{
        featuresDropdownId.classList.remove('block');
        featuresDropdownId.classList.add('hidden');
        arrDownId.classList.add('hidden');
        arrUpId.classList.remove('hidden');
    }
})