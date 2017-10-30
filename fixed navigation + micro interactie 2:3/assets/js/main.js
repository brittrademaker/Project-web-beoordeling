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


//download micro interactie
var downloadSuccesfull = document.querySelector('span');
var downloadButton = document.querySelector('[href="#hierzo"]');

function addOne() {
    downloadSuccesfull.classList.toggle('badge');
}

downloadButton.addEventListener('click', addOne);


//silder micro interactie
var slide = document.getElementById('slide');
var sliderDiv = document.getElementById('sliderAmount');

//slider formulier, semicolon omdat het een functions is die start met een is teken
slide.onchange = function () {
    sliderDiv.innerHTML = this.value;
};

//download micro interactie
var kleurtje = document.querySelector('ul ul li');

function lezen() {
    kleurtje.classList.toggle('aan-het-lezen');
}

kleurtje.addEventListener('click', lezen);
