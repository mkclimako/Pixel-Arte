// Paint Pixels
const COLOR_PALLET = document.querySelector('#color-pallet-container');

let colorSelectedInPalette = '';

const selectPaint = (event) => {
        document.querySelector('#color-pallet-container').classList.toggle('open');
        let colorPicked = document.querySelectorAll('.colors');
        for(key of colorPicked) {
            colorSelectedInPalette = event.target.id;
            console.log(colorSelectedInPalette)
        }
        return colorSelectedInPalette;
};

COLOR_PALLET.addEventListener('click', selectPaint);

// PAINT

const PIXELS_ON_BOARD = document.querySelectorAll('.pixels');

const paint = (event) => {
        let currentColor = colorSelectedInPalette;
        let changeColorPixel = event.target;
        changeColorPixel.style.backgroundColor = currentColor;
};

  
PIXELS_ON_BOARD.forEach(pixel => pixel.addEventListener('click',paint));

// CHANGE BACKGOUND COLOR OF THE BOARD
const FRAME_COLOR_PALLET = document.querySelector('#board-color-pallet-container');

let backgroundcolorframeSelected = '';

const selectPaintForBackgroundColorFrame = (event) => {
    let colorPicked = document.querySelectorAll('.colors');
    for(key of colorPicked) {
        backgroundcolorframeSelected = event.target.id;
    }
    return backgroundcolorframeSelected;
};

FRAME_COLOR_PALLET.addEventListener('click', selectPaintForBackgroundColorFrame)

const changeFrameBackground = () => {
    let currentColor = backgroundcolorframeSelected;
    document.querySelector('#board-container').style.backgroundColor = currentColor;
    document.querySelector('#board-color-pallet-container').classList.toggle('open');

};

const FRAME_COLORS = document.querySelectorAll('.colors');
FRAME_COLORS.forEach(frameColorPallet => frameColorPallet.addEventListener('dblclick',changeFrameBackground));

