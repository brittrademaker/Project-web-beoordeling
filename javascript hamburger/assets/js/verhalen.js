/* $('input').click(function () {
    var img = $('img');
    if (img.hasClass('north')) {
        img.attr('class', 'west');
    } else if (img.hasClass('west')) {
        img.attr('class', 'south');
    } else if (img.hasClass('south')) {
        img.attr('class', 'east');
    } else if (img.hasClass('east')) {
        img.attr('class', 'north');
    }
}); */


var dropdown = document.querySelector('nav ul ul');
var downloadlink = document.querySelector('[href="#download"]');

function show(e) {
    dropdown.classList.toggle('zichtbaar');
    e.preventDefault();
}

downloadlink.addEventListener('click', show);
