let defaultNumPixelsWide = 22;
let paintColour = 'black'
let randomFlag = 0;

const paintPixel = (e) => {
    if (!e.shiftKey) {
        if (randomFlag == 1) {
            paintColour = '#' + Math.floor(Math.random()*0xFFFFFF).toString(16);
            document.querySelector('#colour-selector').value = paintColour;
        }
        e.target.style.backgroundColor = paintColour;
    }
    
}

const setupSketchPad = async (numPixelsWide, init) => {
    const sketchPad = document.querySelector(".sketch-pad");
    let width = sketchPad.offsetWidth
    let height = sketchPad.offsetHeight
    let numPixelsHigh = Math.ceil(height / (width/numPixelsWide));
    while (sketchPad.firstChild) {
           sketchPad.firstChild.remove()
    }
    sketchPad.style.setProperty('--cols', numPixelsWide);
    sketchPad.style.setProperty('--rows', numPixelsHigh);
    for (let y = 0; y < (numPixelsWide); y++) {
        for (let x = 0; x < (numPixelsWide); x++) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.id = `row${y}`;
            pixel.addEventListener('mousemove', paintPixel);
            sketchPad.appendChild(pixel)
        }
    }
}

const setUpControls = () => {
    const pixelSlider = document.querySelector("#pixel-slider");
    const resetButton = document.querySelector('#reset-button');
    const randomColourButton = document.querySelector('#random-colour-button');
    const colourSelector = document.querySelector('#colour-selector');
    colourSelector.value = '#000000';
    pixelSlider.value = defaultNumPixelsWide;
    pixelSlider.addEventListener('change', (e) => {
        setupSketchPad(e.target.value, 0);
    });
    resetButton.addEventListener('click', (e) => {
        setupSketchPad(pixelSlider.value, 0);
    });
    colourSelector.addEventListener('change', (e) => {
        paintColour = e.target.value;
        randomFlag = 0;
    });
    randomColourButton.addEventListener('click', (e) => {
        randomFlag = 1;
    });

}

setupSketchPad(defaultNumPixelsWide, 1);
setUpControls();
