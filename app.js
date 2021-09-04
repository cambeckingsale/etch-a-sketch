const sketchPad = document.querySelector(".sketch-pad");
let width = sketchPad.offSetWidth;
let numPixelsWide = 16;

sketchPad.style.setProperty('--cols', numPixelsWide);
sketchPad.style.setProperty('--rows', numPixelsWide);


for (let i = 0; i < (numPixelsWide*numPixelsWide); i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.innerText = i;
    sketchPad.appendChild(pixel)
}