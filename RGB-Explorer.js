
/*  
    Set up a canvas to draw our colour on:
    (It's a lot like painting)
*/
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

/*  
    Define our Color Variables, R, G, and B - important to remember these are between 0 and 255
*/

var R = 255;
var G = 100;
var B = 100;


context.fillStyle = rgb(R, G, B); //define the colour by our Red, Green, and Blue variables
    
context.fillRect(0, 0, 500, 500); //Fills in the canvas with our color

















































function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

function drawColor() {

    context.fillStyle = rgb(R, G, B); //define the colour by our Red, Green, and Blue variables
    
    context.fillRect(0, 0, canvas.width, canvas.height); //Fills in the canvas with our color

}


drawColor();


var Rslider = document.getElementById("R");
var Gslider = document.getElementById("G");
var Bslider = document.getElementById("B");

var Rraw = document.getElementById("red-raw");
var Rpct = document.getElementById("red-pct");

var Graw = document.getElementById("green-raw");
var Gpct = document.getElementById("green-pct");

var Braw = document.getElementById("blue-raw");
var Bpct = document.getElementById("blue-pct");



Rslider.value = R;
Gslider.value = G;
Bslider.value = B;

Rraw.innerHTML = Math.round(Rslider.value);
Rpct.innerHTML = Math.round(Rslider.value / 255 * 100);
Graw.innerHTML = Math.round(Gslider.value);
Gpct.innerHTML = Math.round(Gslider.value / 255 * 100);
Braw.innerHTML = Math.round(Bslider.value);
Bpct.innerHTML = Math.round(Bslider.value / 255 * 100);

Rslider.oninput = function () {
    R = this.value;
    Rraw.innerHTML = Math.round(this.value);
    Rpct.innerHTML = Math.round(this.value / 255 * 100);
    drawColor()
}

Gslider.oninput = function () {
    G = this.value;
    Graw.innerHTML = Math.round(this.value);
    Gpct.innerHTML = Math.round(this.value / 255 * 100);
    drawColor()
}

Bslider.oninput = function () {
    B = this.value;
    Braw.innerHTML = Math.round(this.value);
    Bpct.innerHTML = Math.round(this.value / 255 * 100);
    drawColor()
}




