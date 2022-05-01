// DRAWER MENU COLOR PALLET HANDLE
const OPEN_DRAWER_MENU = document.querySelector("#drawer-menu");

const openColorPallet = () => {
        document.querySelector('#color-pallet-container').classList.toggle('open');
        document.querySelector('#board-color-pallet-container').classList.remove('open');
        document.querySelector('#eraser_container').classList.remove('open');
        document.querySelector('#change-pixel-form-container').classList.remove('open')


};

OPEN_DRAWER_MENU.addEventListener("mouseover", openColorPallet);

// BOARD BACKGORUND COLOR PALLET HANDLE
const OPEN_BACKGORUND_PALLET = document.querySelector('#changeBg-board');

const openBackgroundColorPallet = () => {
    document.querySelector('#board-color-pallet-container').classList.toggle('open');
    document.querySelector('#color-pallet-container').classList.remove('open');
    document.querySelector('#eraser_container').classList.remove('open');
    document.querySelector('#change-pixel-form-container').classList.remove('open')

    

};

OPEN_BACKGORUND_PALLET.addEventListener('mouseover', openBackgroundColorPallet);

// ERASER MENU HANDLE

const OPEN_ERASER_MENU = document.querySelector('#clear-board');

const openEraserMenu = () => {
    document.querySelector('#eraser_container').classList.toggle('open');
    document.querySelector('#color-pallet-container').classList.remove('open');
    document.querySelector('#board-color-pallet-container').classList.remove('open');
    document.querySelector('#change-pixel-form-container').classList.remove('open');
};

OPEN_ERASER_MENU.addEventListener('mouseover',openEraserMenu);

// OPEN CHANGE PIXEL FOR HANFLE

const OPEN_CHANGE_PIXEL_FORM_MENU = document.querySelector('#change-pixels-form')

const openChangeFormMenu = () => {
    document.querySelector('#change-pixel-form-container').classList.toggle('open')
    document.querySelector('#eraser_container').classList.remove('open');
    document.querySelector('#color-pallet-container').classList.remove('open');
    document.querySelector('#board-color-pallet-container').classList.remove('open');
}

OPEN_CHANGE_PIXEL_FORM_MENU.addEventListener('mouseover',openChangeFormMenu)