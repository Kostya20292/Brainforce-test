
const buttonCols = document.querySelector('.btn-form');
const popupClose = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup-btn');
const formClose = document.querySelector('.form-close');
const form = document.querySelector('form');
const inputName = document.querySelector('#input-name');
const inputTel = document.querySelector('#input-tel');
const input = document.querySelector('.input');
const question = document.querySelectorAll('.question');
const menuOpen = document.querySelector('.menu-open');
const nav = document.querySelector('.nav');

let max = 12;

  menuOpen.addEventListener('click', () =>{
    console.log("fgdgdg");
    nav.classList.toggle('show-menu');
  });

const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;

  document.body.dbScrollY = window.scrollY;

  document.body.style.cssText = `
  position: fixed;
  top: ${-window.scrollY}px;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-right: ${-widthScroll}px;
  `;
};

const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY,
  })
};

buttonCols.addEventListener('click', (e) =>{
  e.preventDefault();
  $('.popup').fadeIn();
  disableScroll();
})

popupClose.addEventListener('click', (e) =>{
  $('.popup').fadeOut();
  enableScroll();
})

input.oninput = function(){
  input.nextElementSibling.classList.add('count');
    input.nextElementSibling.textContent = `Осталось ${max-input.value.length} знаков`;
}


 popupBtn.addEventListener("click", (e) =>{
   e.preventDefault();
   if(inputName.value === "" && inputTel.value === ""){
     inputName.nextElementSibling.textContent = "Обязательное поле";
     inputName.classList.add('input-error');
      input.nextElementSibling.classList.remove('count');
     inputTel.nextElementSibling.textContent = "Обязательное поле";
     inputTel.classList.add('input-error');
   } else if (inputTel.value === ""){
     inputTel.nextElementSibling.textContent = "Обязательное поле";
     inputTel.classList.add('input-error');
     inputName.classList.remove('input-error');
   } else if (inputName.value === ""){
      inputName.nextElementSibling.textContent = "Обязательное поле";
      inputName.classList.add('input-error');
      inputTel.classList.remove('input-error');
   } else {
     inputTel.value = "";
     inputName.value = ""
     inputName.nextElementSibling.textContent = "";
    inputTel.nextElementSibling.textContent = "";
      input.nextElementSibling.classList.remove('count');
      inputName.classList.remove('input-error');
      $('.popup').fadeOut();
      $('.form-popup').fadeIn();
   }
})

formClose.addEventListener('click', (e) => {
  $('.form-popup').fadeOut();
  enableScroll();
})

for (item of question) {
  item.addEventListener('click', function() {
    if(this.classList.contains('active')){
      this.classList.remove('active');
    } else {
      for(el of question) {
        el.classList.remove('active');
      }
      this.classList.add('active');
    }
  })
}




