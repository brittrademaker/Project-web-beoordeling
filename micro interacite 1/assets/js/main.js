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


//var dropdown = document.querySelector('nav ul ul');
//var downloadlink = document.querySelector('[href="#download"]');
//
//function show(e) {
//    dropdown.classList.toggle('zichtbaar');
//    e.preventDefault();
//}
//
//downloadlink.addEventListener('click', show);

