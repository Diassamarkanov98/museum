const prev =document.getElementById('btn-prev'),
      next =document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      count = document.getElementById('count')
let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    count.innerHTML = "0" + (n+1);
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    count.innerHTML = "0" + (n+1);
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide =() => {
    if(index === slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index)
    } else {
        index++;
        prepareCurrentSlide(index)
    }
}

const prevSlide =() => {
    if(index === 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index)
    } else {
        index--;
        prepareCurrentSlide(index)
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index= indexDot;
        prepareCurrentSlide(index)
    })

})

const swipedetect = (el) => {
    let surface = el;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    
    let startTime = 0;
    let elapsedTime = 0;

    let threshold = 150;
    let restraint = 100;
    let allowedTime = 300;

    surface.addEventListener('mousedown', function(e){
        startX = e.pageX;
        startY = e.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    })
    
    surface.addEventListener('mouseup', function(e){
        distX = e.pageX - startX;
        distY = e.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
                if(distX > 0) { 
                    prevSlide();
                } else {
                    nextSlide();
                }
            }
        }
        e.preventDefault();
    })
}

let el = document.querySelector('.slider-wrapper');
swipedetect(el);

next.addEventListener('click' , nextSlide)
prev.addEventListener('click' , prevSlide)
