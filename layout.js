// HEADER

const BODY = document.querySelector('body');
const MAIN_SECTION_CONTAINER = document.querySelector('#main-container');

// COLOR PALLET

const COLOR_PALLET_CONTAINER = document.createElement('section');
COLOR_PALLET_CONTAINER.setAttribute('id','color-pallet-container');

const COLORS = [
    "#778083",
    "#446CF3",
    "#3152BE",
    "#300495",
    "#964888",
    "#A9362A",
    "#A93413",
    "#8A290D",
    "#4E3007",
    "#3C6915",
    "#FFD600",
    "#174056",
    "#000000",
    "#BCC0C4",
    "#267AF6",
    "#2889F7",
    "#7470F6",
    "#DF70CF",
    "#E2515F",
    "#E64A1D",
    "#DE5F28",
    "#AA7E20",
    "#80FF15",
    "#EBFF00",
    "#428993",
    "#2C2C2C",
    "#E8E4E8",
    "#54C1F8",
    "#6D8AF6",
    "#9C7AF7",
    "#E17FF7",
    "#E4609A",
    "#E9755D",
    "#F09E53",
    "#F5B633",
    "#61A950",
    "#E6F43F",
    "#79E8E3",
    "#5F5F5F",
    "#FFFFFF",
    "#A8E7F9",
    "#BCB9F9",
    "#DBB9F9",
    "#ECB7F9",
    "#F0BFDF",
    "#F2D0B6",
    "#E5CDA8",
    "#F9D78C",
    "#A0E390",
    "#D8EE84",
    "#84B4B6",
    "#C7C0C0",
  ];
 
COLORS.map((color) => {
    let colorDiv =  document.createElement('div');
    colorDiv.classList.add('colors');
    colorDiv.setAttribute('id',color);
    colorDiv.style.backgroundColor = color;
    COLOR_PALLET_CONTAINER.appendChild(colorDiv);
 });

 MAIN_SECTION_CONTAINER.appendChild(COLOR_PALLET_CONTAINER);

 // BOARD BACKGROUND COLOR PALLET
 
 const BOARD_COLOR_PALLET_CONTAINER = document.createElement('section');
 BOARD_COLOR_PALLET_CONTAINER.setAttribute('id','board-color-pallet-container');

 const BOARD_BACKGROUND_COLORS = [
    "#778082",
    "#446CF2",
    "#3152Bf",
    "#300496",
    "#964889",
    "#A9362b",
    "#A93414",
    "#8A290e",
    "#4E3008",
    "#3C6916",
    "#FFD601",
    "#174057",
    "#000001",
    "#BCC0C5",
    "#267AF7",
    "#2889F8",
    "#7470F7",
    "#DF70CE",
    "#E2515E",
    "#E64A1E",
    "#DE5F29",
    "#AA7E21",
    "#80FF16",
    "#EBFF01",
    "#428994",
    "#2C2C2D",
    "#E8E4E9",
    "#54C1F9",
    "#6D8AF7",
    "#9C7AF8",
    "#E17FF8",
    "#E4609B",
    "#E9755E",
    "#F09E54",
    "#F5B634",
    "#61A951",
    "#E6F43E",
    "#79E8E4",
    "#5F5F5E",
    "#FFFFFE",
    "#A8E7F8",
    "#BCB9F8",
    "#DBB9F8",
    "#ECB7F8",
    "#F0BFDE",
    "#F2D0B7",
    "#E5CDA9",
    "#F9D78D",
    "#A0E391",
    "#D8EE85",
    "#84B4B7",
    "#C7C0C1",
  ];

  BOARD_BACKGROUND_COLORS.map((color) => {
    let bgColorDiv =  document.createElement('div');
    bgColorDiv.classList.add('colors');
    bgColorDiv.setAttribute('id',color);
    bgColorDiv.style.backgroundColor = color;
    BOARD_COLOR_PALLET_CONTAINER.appendChild(bgColorDiv);
 });

 MAIN_SECTION_CONTAINER.appendChild(BOARD_COLOR_PALLET_CONTAINER);

 // ERASER OPTIONS

 const ERASER_CONTAINER = document.createElement('section');
 ERASER_CONTAINER.setAttribute('id','eraser_container');

 const menuEraserIconSrc = [{
    id:'transparent',
    class:'colors',
    src:'src/icon/erase-single-frame.svg',
    alt:'Apagar um pixel por vez',
},
{
    id: 'erase-whole-frame',
    class: 'erase_whole',
    src:'src/icon/erase-whole-frame.svg',
    alt: 'Apagar todos os pixels de uma vez'
}
];

menuEraserIconSrc.map((eraseIconSrc) => {
    let img =  document.createElement('img');
    img.setAttribute('id',`${eraseIconSrc.id}`);
    img.classList.add(`${eraseIconSrc.class}`);
    img.setAttribute('src',`${eraseIconSrc.src}`);
    img.setAttribute('alt',`${eraseIconSrc.alt}`);
    ERASER_CONTAINER.appendChild(img);
 });

 MAIN_SECTION_CONTAINER.appendChild(ERASER_CONTAINER);
