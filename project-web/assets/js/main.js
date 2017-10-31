//dropdown menu
var downloadLink = document.querySelector('[href="#download"]');
var likeLink = document.querySelector('[href="#likes"]');
var profielLink = document.querySelector('[href="#profiel"]');

function show(e) {
    var dropDown = this.getAttribute("href");
    document.querySelector(dropDown).classList.toggle('zichtbaar');
    //voorkomen naar volgende pagina gaan
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

//silder filter micro interactie 2, bron: https://www.w3schools.com/howto/howto_js_rangeslider.asp
var slide = document.getElementById('slide');
var sliderTijd = document.getElementById('sliderAmount');

//slider formulier, semicolon omdat het een functions is die start met een is teken
slide.onchange = function () {
    sliderTijd.innerHTML = this.value;
};


//bewerken status verhaal micro interactie 3
var editStatus = document.querySelector('ul ul li');

function opties() {
    editStatus.classList.toggle('aan-het-lezen');
}

editStatus.addEventListener('click', opties);


//bewerken status verhaal micro interactie 3
var rood = document.querySelector('li div');

function groen() {
    rood.classList.toggle('liked');
}

rood.addEventListener('click', groen);

//download micro interactie 1
var heartIcon = document.querySelector('li div');

function like() {
    heartIcon.classList.toggle('liked');
}

heartIcon.addEventListener('click', like);

