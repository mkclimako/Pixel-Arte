const DARK_THEME_BUTTON = document.querySelector('#dark-theme');

const bodyTag = document.querySelector('body');
const headerTag = document.querySelector('header');
const optionMenu = document.querySelector('#option-menu ');
const colorPalletContainer = document.querySelector('#color-pallet-container');
const boardColorPalletContainer = document.querySelector('#board-color-pallet-container');
const frameContainer = document.querySelector('#board-container ');
const eraserContainer = document.querySelector('#eraser_container');
const changePixelFormContainer = document.querySelector('#change-pixel-form-container');


const darkTheme = () => {
  bodyTag.classList.toggle('darkTheme');
  headerTag.classList.toggle('darkTheme');
  optionMenu.classList.toggle('darkTheme');
  colorPalletContainer.classList.toggle('darkTheme');
  boardColorPalletContainer.classList.toggle('darkTheme');
  eraserContainer.classList.toggle('darkTheme');
  frameContainer.classList.toggle('darkTheme');
  changePixelFormContainer.classList.toggle('darkTheme');

  document.querySelector('#color-pallet-container').classList.remove('open');
  document.querySelector('#board-color-pallet-container').classList.remove('open');
  document.querySelector('#eraser_container').classList.remove('open');
  document.querySelector('#change-pixel-form-container').classList.remove('open');

};

DARK_THEME_BUTTON.addEventListener('click', darkTheme)
