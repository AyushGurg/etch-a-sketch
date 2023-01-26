let sketchpad = document.getElementById('sketchpad');
let sketchpadWidth = window.getComputedStyle(sketchpad).getPropertyValue('width');
let pixelWidth = 0;

// Default size
let gridsize = 1;
makegrid();



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
            pixel.style.backgroundColor = "white";
            });
        }
    } 
}
