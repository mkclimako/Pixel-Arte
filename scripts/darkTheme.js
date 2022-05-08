const DARK_MODE = document.querySelector('#dark-mode');
const LIGHT_MODE = document.querySelector('#light-mode');

const bodyTag = document.querySelector('body');
const headerTag = document.querySelector('header');
const optionMenu = document.querySelector('#option-menu ');
const colorPalletContainer = document.querySelector('#color-pallet-container');
const boardColorPalletContainer = document.querySelector('#board-color-pallet-container');
const frameContainer = document.querySelector('#board-container ');
const eraserContainer = document.querySelector('#eraser_container');

const changeTheme = () => {
  bodyTag.classList.toggle('darkTheme');
  headerTag.classList.toggle('darkTheme');
  optionMenu.classList.toggle('darkTheme');
  colorPalletContainer.classList.toggle('darkTheme');
  boardColorPalletContainer.classList.toggle('darkTheme');
  eraserContainer.classList.toggle('darkTheme');
  frameContainer.classList.toggle('darkTheme');

  document.querySelector('#color-pallet-container').classList.remove('open');
  document.querySelector('#board-color-pallet-container').classList.remove('open');
  document.querySelector('#eraser_container').classList.remove('open');

  DARK_MODE.classList.toggle('hide');
  LIGHT_MODE.classList.toggle('hide');
};

DARK_MODE.addEventListener('click', changeTheme);
LIGHT_MODE.addEventListener('click', changeTheme);
