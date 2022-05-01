const CHANGE_PIXEL_FORM_SELECT = document.querySelectorAll('.shapes');

let shapeSelected = '';

const selectShape = (event) => {
    let shapePicked = document.querySelectorAll('.shapes');
    document.querySelector('#change-pixel-form-container').classList.toggle('open')
    for( key of shapePicked ) {
        shapeSelected = event.target.id;
        
    }
    return shapeSelected
}

CHANGE_PIXEL_FORM_SELECT.forEach(shape => shape.addEventListener('click', selectShape))


const PIXEL_ON_FRAME_TO_CHANGE_FORM = document.querySelectorAll('.pixels');

const changeShape = (event) => {
    let currentShape = shapeSelected;
    let changeShapePixel = event.target;
    changeShapePixel.classList.toggle(currentShape);
}

PIXEL_ON_FRAME_TO_CHANGE_FORM.forEach(pixel => pixel.addEventListener('click',changeShape))
