
let gridsize = 30;/*prompt("what size grid? (Max 64");*/

//getting the dimensions of the sketchpad
let sketchpad = document.getElementById('sketchpad');
let sketchpadWidth = window.getComputedStyle(sketchpad).getPropertyValue('width');

let pixelWidth = (parseInt(sketchpadWidth) / gridsize) + 'px';

for (let height = 0; height < gridsize; height++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');    
    sketchpad.appendChild(pixel);
    pixel.style.height = pixelWidth;
    pixel.style.flexBasis = pixelWidth;
    pixel.addEventListener("mouseenter",() => {
    pixel.style.backgroundColor = "red";
    });
  
}