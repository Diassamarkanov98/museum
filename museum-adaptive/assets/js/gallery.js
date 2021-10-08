function shuffleGallery() {
    const pictureInnerContainer = document.querySelector('.picture-inner-container');
    let array = ['./assets/images/galery/galery1.webp',
    './assets/images/galery/galery2.webp',
    './assets/images/galery/galery3.webp',
    './assets/images/galery/galery4.webp',
    './assets/images/galery/galery5.webp',
    './assets/images/galery/galery6.webp',
    './assets/images/galery/galery7.webp',
    './assets/images/galery/galery8.webp',
    './assets/images/galery/galery9.webp',
    './assets/images/galery/galery10.webp',
    './assets/images/galery/galery11.webp',
    './assets/images/galery/galery12.webp',
    './assets/images/galery/galery13.webp',
    './assets/images/galery/galery14.webp',
    './assets/images/galery/galery15.webp'];
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    shuffle(array);
    array.forEach(i=>{
        let img = document.createElement("img");
        img.setAttribute("src", i);
        img.setAttribute("class", i);
        img.classList.add('picture-inner-item');
        pictureInnerContainer.appendChild(img);
    });
}