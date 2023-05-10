// NAVBAR RESPONSIVE
const hamburger = document.querySelector('.nav__hamburger'),
    list = document.querySelector('.nav__list ul');

window.addEventListener('DOMContentLoaded', () => {
    if(window.innerWidth <= 1100){
        list.classList.add('mobile');
    }
})

window.addEventListener('resize', () => {
    if(!(window.innerWidth <= 1100)) {
      list.classList.remove('mobile');
      list.classList.remove('in-from_bottom');
      list.classList.remove('exit-from_top');
      list.style.display = 'flex';
    } else {
      list.classList.add('mobile');
      list.style.display = 'none';
    }
  })
  

hamburger.addEventListener('click', () => {
    if (list.classList.contains('in-from_bottom')) {
        // animation
        list.classList.add('exit-from_top');
        list.classList.remove('in-from_bottom');

        // style
        setTimeout(() => {
            list.style.display = 'none';
        }, 300);
    } else {
        // style
        list.style.display = 'flex'

        // animation
        list.classList.add('in-from_bottom');
        list.classList.remove('exit-from_top');
    }
})