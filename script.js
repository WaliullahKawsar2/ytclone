
const create = document.querySelector(".create");
const theme = document.getElementById('theme');
const r = document.querySelector(':root');
const style = window.getComputedStyle(r);
theme.addEventListener('click', () => {
  let red = style.getPropertyValue('--backgroundColor');
  if( red == '#0f0f0f'){
  r.style.setProperty('--backgroundColor', '#f1f1f1');
  r.style.setProperty('--text-primary', '#0f0f0f');
  r.style.setProperty('--menu-background', '#8a888852');
  r.style.setProperty('--hover', '#282828');
} else {
  r.style.setProperty('--backgroundColor', '#0f0f0f' );
  r.style.setProperty('--text-primary', '#f1f1f1');
  r.style.setProperty('--menu-background', '#282828');
  r.style.setProperty('--hover', '#8a888852');
};

})

  




let menus = document.querySelectorAll('.menu');
let btn = document.getElementById('menu')



btn.addEventListener('click', ()=>{
  menus.forEach((menu) =>{
    if (menu.classList.contains("menu")) {
      menu.classList.remove("menu");
      menu.classList.add('click');
      document.querySelector('.hide').style.display = 'none';
      const element = document.getElementById('aside');
      element.style.maxWidth = '170px';
      
    }
    else if (menu.classList.contains("click")) {
      menu.classList.remove("click");
      menu.classList.add('menu');
      document.querySelector('.hide').style.display = 'inherit';
      const element = document.getElementById('aside');
      element.style.maxWidth = '70px'
    }
  })
})

create.addEventListener('click', ()=>{
  document.querySelector(".upload-form").classList.toggle('upload-toggle');
})




