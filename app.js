let defaultNumPixelsWide = 50;
let paintColour = 'black'
let randomFlag = 0;

const paintPixel = (e) => {
    if (randomFlag == 1) {
        paintColour = '#' + Math.floor(Math.random()*0xFFFFFF).toString(16);
        console.log(paintColour);
    }
    e.target.style.backgroundColor = paintColour;
    
}

const setupSketchPad = (numPixelsWide) => {
    const sketchPad = document.querySelector(".sketch-pad");
    while (sketchPad.firstChild) {
        sketchPad.firstChild.remove()
    }
    let width = sketchPad.offsetWidth
    let height = sketchPad.offsetHeight
    let numPixelsHigh = height / (width/numPixelsWide);
    sketchPad.style.setProperty('--cols', numPixelsWide);
    sketchPad.style.setProperty('--rows', numPixelsHigh);
    for (let i = 0; i < (numPixelsWide*Math.ceil(numPixelsHigh)); i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.addEventListener('mousemove', paintPixel);
        sketchPad.appendChild(pixel)
    }
}

const setUpControls = () => {
    const pixelSlider = document.querySelector("#pixel-slider");
    const resetButton = document.querySelector('#reset-button');
    const randomColourButton = document.querySelector('#random-colour-button');
    const colourSelector = document.querySelector('#colour-selector');
    colourSelector.value = '#000000';
    pixelSlider.value = '50';
    pixelSlider.addEventListener('change', (e) => {
        setupSketchPad(e.target.value);
    });
    resetButton.addEventListener('click', (e) => {
        setupSketchPad(pixelSlider.value);
    });
    colourSelector.addEventListener('change', (e) => {
        paintColour = e.target.value;
        randomFlag = 0;
    });
    randomColourButton.addEventListener('click', (e) => {
        randomFlag = 1;
    });

}

setupSketchPad(defaultNumPixelsWide);
setUpControls();
