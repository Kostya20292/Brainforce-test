const buttonCols = document.querySelector('.btn-form');
const closeButton = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');

buttonCols.addEventListener("click", (e) =>{
  e.preventDefault();
  $('.popup').fadeIn();
});
closeButton.addEventListener("click", (e) =>{
  e.preventDefault();
  $('.popup').fadeOut();
})