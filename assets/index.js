function menuShow()  {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }
}

var button = document.getElementById('readbutton');

button.addEventListener('click', function() {
    var card = document.querySelector('.card')
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent = 'Ler menos'
    } else {
        button.textContent = 'Ler mais'
    }
})