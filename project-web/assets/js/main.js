//dropdown menu
var downloadLink = document.querySelector('[href="#download"]');
var likeLink = document.querySelector('[href="#likes"]');
var profielLink = document.querySelector('[href="#profiel"]');

function show(e) {
    var dropDown = this.getAttribute("href");
    document.querySelector(dropDown).classList.toggle('zichtbaar');
    e.preventDefault();
}

downloadLink.addEventListener('click', show);
likeLink.addEventListener('click', show);
profielLink.addEventListener('click', show);


//download micro interactie 1
var downloadSuccesfull = document.querySelector('span');
var downloadButton = document.querySelector('[href="#"]');

function addOne() {
    downloadSuccesfull.classList.toggle('badge');
}

downloadButton.addEventListener('click', addOne);


//silder filter micro interactie 2
var slide = document.getElementById('slide');
var sliderDiv = document.getElementById('sliderAmount');

//slider formulier, semicolon omdat het een functions is die start met een is teken
slide.onchange = function () {
    sliderDiv.innerHTML = this.value;
};


//bewerken status verhaal micro interactie 3
var kleurtje = document.querySelector('ul ul li');

function lezen() {
    kleurtje.classList.toggle('aan-het-lezen');
}

kleurtje.addEventListener('click', lezen);
