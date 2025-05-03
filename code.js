var front = document.getElementById("frontpage");
var price = document.getElementById("prices");
var gall = document.getElementById("gallery");
var kofi = document.getElementById("kofi");
var contentscreen = document.getElementById("screen")

var pricesbutton = document.getElementById("pricesbutton")
var pricesbutton2 = document.getElementById("pricesbutton2")
var gallerybutton = document.getElementById("gallerybutton")
var gallerybutton2 = document.getElementById("gallerybutton2")
var kofibutton = document.getElementById("kofibutton")
var kofibutton2 = document.getElementById("kofibutton2")

function toPrices() {
    front.style.display = "none";
    gall.style.display = "none";
    kofi.style.display = "none";
    price.style.display = "block";
    kofibutton.style.display = "inline-block";
    kofibutton2.style.display = "none";
    gallerybutton.style.display = "inline-block";
    gallerybutton2.style.display = "none";
    pricesbutton.style.display = "none";
    pricesbutton2.style.display = "inline-block";
    contentscreen.scrollTop = 0;
}

function toGallery() {
    front.style.display = "none";
    price.style.display = "none";
    kofi.style.display = "none";
    gall.style.display = "block";
    kofibutton.style.display = "inline-block";
    kofibutton2.style.display = "none";
    pricesbutton.style.display = "inline-block";
    pricesbutton2.style.display = "none";
    gallerybutton.style.display = "none";
    gallerybutton2.style.display = "inline-block";
    contentscreen.scrollTop = 0;
}

function toKofi() {
    gall.style.display = "none";
    price.style.display = "none";
    front.style.display = "none";
    kofi.style.display = "block";
    kofibutton.style.display = "none";
    kofibutton2.style.display = "inline-block";
    pricesbutton.style.display = "inline-block";
    pricesbutton2.style.display = "none";
    gallerybutton.style.display = "inline-block";
    gallerybutton2.style.display = "none";
    contentscreen.scrollTop = 0;
}

function toFront() {
    gall.style.display = "none";
    price.style.display = "none";
    kofi.style.display = "none";
    front.style.display = "block";
    kofibutton.style.display = "inline-block";
    kofibutton2.style.display = "none";
    pricesbutton.style.display = "inline-block";
    pricesbutton2.style.display = "none";
    gallerybutton.style.display = "inline-block";
    gallerybutton2.style.display = "none";
    contentscreen.scrollTop = 0;
}

var render = document.getElementById("rendered");
var sketch = document.getElementById("sketch");
var rendercontent = document.getElementById("render-content");
var sketchcontent = document.getElementById("sketch-content");

function styleRender() {
    render.style.webkitTextStroke = "1px rgb(187, 205, 195)";
    sketch.style.webkitTextStroke = "";
    rendercontent.style.display = "block";
    sketchcontent.style.display = "none";
}

function styleSketch() {
    sketch.style.webkitTextStroke = "1px rgb(187, 205, 195)";
    render.style.webkitTextStroke = "0px";
    rendercontent.style.display = "none";
    sketchcontent.style.display = "block";
}

var numpadbuttons = document.getElementsByClassName("numpad-button");
for (var i = 0; i < numpadbuttons.length; i++) {
    numpadbuttons[i].addEventListener('click', function(){
        this.classList.toggle("clicked-numpad-button");
    })
}

var knobs = document.getElementsByClassName("knob");
for (var j = 0; j < knobs.length; j++) {
    knobs[j].addEventListener('click', function(){
        this.classList.toggle("clicked-knob");
    })
}