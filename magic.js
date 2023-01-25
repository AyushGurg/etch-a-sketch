
let gridsize = 16;/*prompt("what size grid? (Max 64");*/

    
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.textContent = "h";
        document.getElementById('sketchpad').appendChild(pixel);
        

        
        pixel.addEventListener("mouseenter",() => {
            pixel.style.backgroundColor = "red";
        })
