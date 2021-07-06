"use strict";

const buttonCols = document.querySelector('.btn-form');
const popupClose = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup-btn');
const formClose = document.querySelector('.form-close');
const form = document.querySelector('form');
const inputName = document.querySelector('#input-name');
const inputTel = document.querySelector('#input-tel');
const input = document.querySelector('.input');

let max = 12;

buttonCols.addEventListener('click', (e) =>{
  e.preventDefault();
  $('.popup').fadeIn();
})

popupClose.addEventListener('click', (e) =>{
  e.preventDefault();
  $('.popup').fadeOut();
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
   }
})







