
function togglemenu(){

  const nav = document.querySelector('.nav');

  nav.classList.toggle('active'); // 'toggle' basicamente é adcione caso tenha, remova caso não tenha.

  if (nav.classList == 'active') {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no"; 
  } else {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes"; // IE

 }
}


const btn_mobile = document.querySelector('#toggle-menu');

btn_mobile.addEventListener('click', togglemenu)