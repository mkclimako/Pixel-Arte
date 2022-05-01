const ERASER_WHOLE_FRAME = document.querySelector('#erase-whole-frame');

const clearWholeBoard = () => {
   const getAllPixels = document.querySelectorAll('.pixels');
   document.querySelector('#eraser_container').classList.remove('open');
   getAllPixels.forEach(pixel => pixel.style.backgroundColor = 'transparent')
};

ERASER_WHOLE_FRAME.addEventListener('click',clearWholeBoard);

// ERASE SINGLE PIXEL

const ERASER_CONTAINER_PALLET = document.querySelector('#eraser_container');

let eraseColor = '';

const selectColorToErase = (event) => {
   document.querySelector('#eraser_container').classList.toggle('open');
   let colorErasePicked = document.querySelectorAll('.colors');
   for(key of colorErasePicked) {
      eraseColor = event.target.id;
   }
   return eraseColor;
};

ERASER_CONTAINER_PALLET.addEventListener('click', selectColorToErase);

const PIXELS_ON_FRAME = document.querySelectorAll('.pixels');

const eraseSinglePixel = (event) => {
   let currentEraseColor = eraseColor;
   let eraseColorPixel = event.target;
   eraseColorPixel.style.backgroundColor = currentEraseColor;
};

PIXELS_ON_FRAME.forEach(erasePixel => erasePixel.addEventListener('dblclick',eraseSinglePixel));
