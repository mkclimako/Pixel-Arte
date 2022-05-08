// DRAWER MENU COLOR PALLET HANDLE
const OPEN_COLOR_PALLET = document.querySelector("#drawer-menu");
const OPEN_BACKGORUND_PALLET = document.querySelector("#changeBg-board");
const OPEN_ERASER_MENU = document.querySelector("#clear-board");
const THEME_BTN = document.querySelectorAll(".theme-btn");
const OPTION_MENU = document.querySelector("#option-menu");

const openCloseColorPallet = () => {
    document.querySelector("#color-pallet-container").classList.add("open");
    document.querySelector("#board-color-pallet-container").classList.remove("open");
    document.querySelector("#eraser_container").classList.remove("open");

};

const openCloseBackgroundPallet = () => {
    document.querySelector("#board-color-pallet-container").classList.add("open");
    document.querySelector("#color-pallet-container").classList.remove("open");
    document.querySelector("#eraser_container").classList.remove("open");
     
};

const openCloseEraserMenu = () => {
    document.querySelector("#eraser_container").classList.add("open");
    document.querySelector("#color-pallet-container").classList.remove("open");
    document.querySelector("#board-color-pallet-container").classList.remove("open");
};


OPEN_COLOR_PALLET.addEventListener("mouseover", openCloseColorPallet);
OPEN_BACKGORUND_PALLET.addEventListener("mouseover", openCloseBackgroundPallet);
OPEN_ERASER_MENU.addEventListener("mouseover", openCloseEraserMenu);


const closeAllMenus = () => {
    document.querySelector("#color-pallet-container").classList.remove("open");
    document
      .querySelector("#board-color-pallet-container")
      .classList.remove("open");
    document.querySelector("#eraser_container").classList.remove("open");
}

THEME_BTN.forEach((btn) => {
  btn.addEventListener("mouseover", closeAllMenus);
});

document.querySelector("#eraser_container").addEventListener("mouseleave", closeAllMenus);
document.querySelector("#color-pallet-container").addEventListener("mouseleave", closeAllMenus);
document.querySelector("#board-color-pallet-container").addEventListener("mouseleave", closeAllMenus);
