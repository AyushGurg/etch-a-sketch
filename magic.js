let sketchpad = document.getElementById('sketchpad');
let sketchpadWidth = window.getComputedStyle(sketchpad).getPropertyValue('width');
let pixelWidth = 0;

// Default size
let gridsize = 1;
makegrid();

//random colorway
let red, green,blue;

//
let gridsizeChange = document.getElementById('gridsize');
gridsizeChange.addEventListener('click', () => {
    gridsize = prompt("How many pixels on the sketchpad?");
    makegrid();
})

//getting the dimensions of the sketchpad
function makegrid() {
    
    //Clear the sketchpad
    sketchpad.innerHTML = "";
    
    // Makes the grid
    pixelWidth = (parseInt(sketchpadWidth) / gridsize) + 'px';

    for (let height = 0; height < gridsize; height++) {
        for (let width = 0; width < gridsize; width++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');    
            sketchpad.appendChild(pixel);
            pixel.style.height = pixelWidth;
            pixel.style.flexBasis = pixelWidth;
            pixel.addEventListener("mouseenter",() => {
                red = Math.floor(Math.random()*255);
                green = Math.floor(Math.random()*255);
                blue = Math.floor(Math.random()*255);
                pixel.style.backgroundColor = "rgb(" + (red).toString(10) + ","+ (green).toString(10) + "," + (blue).toString(10) + ")";
            });
        }
    } 
}
