const btnBrg = document.getElementById('btnBurger');
const brgMenu = document.getElementById('burgerMenu');
const span1 = document.getElementById('1');
const span2 = document.getElementById('2');
const span3 = document.getElementById('3');
const links = document.getElementsByClassName('burger_nav__link');
const main = document.querySelector('main');
const intro = document.querySelector('.intro__title');
const introText = document.querySelector('.intro__text');
const introBtn = document.querySelector('.btn_discover');

btnBrg.onclick = function () {
    let width = document.documentElement.clientWidth;
    brgMenu.classList.toggle('active')
    brgMenu.classList.toggle('inactive')
    span1.classList.toggle('first');
    span2.classList.toggle('middle');
    span3.classList.toggle('last');
    if ( width > 780) {
        intro.classList.toggle('hidden');
        introText.classList.toggle('hidden');
        introBtn.classList.toggle('hidden');
        };
}
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        let width = document.documentElement.clientWidth;
        brgMenu.classList.toggle('active')
        brgMenu.classList.toggle('inactive')
        span1.classList.toggle('first');
        span2.classList.toggle('middle');
        span3.classList.toggle('last');
        if (width > 780) {
        intro.classList.toggle('hidden');
        introText.classList.toggle('hidden');
        introBtn.classList.toggle('hidden');
        };
    });
}
main.addEventListener('click', function(e) {
    if(e.target.id !== 'btnBurger' && e.target.id !== 'burgerMenu'){
        let width = document.documentElement.clientWidth;
        brgMenu.classList.remove('active');
        brgMenu.classList.add('inactive')
        span1.classList.remove('first');
        span2.classList.remove('middle');
        span3.classList.remove('last');
        if (width > 780){
            intro.classList.remove('hidden');
            introText.classList.remove('hidden');
            introBtn.classList.remove('hidden');
            };
    }
});
