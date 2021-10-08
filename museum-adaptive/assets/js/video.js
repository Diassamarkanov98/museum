//Карусель в блоке video
const videoSlideContainer = document.querySelector('.video_line');
const videos = document.querySelectorAll('.videoslide')[0];
const videoDots = document.querySelectorAll('.videodot')
let isEnabled = true;

document.getElementById('btn-video-next').addEventListener('click', function videoNext() {
    if(isEnabled) {
        isEnabled = false;
        const cardStyle = window.getComputedStyle(videos);
        const cardWidth = parseInt(cardStyle['width']);
        const cards = document.querySelectorAll('.videoslide');
        const margin = parseInt(cardStyle['margin-right']);
        const totalWidth = margin + cardWidth;
        videoSlideContainer.style.transition = 'transform 0.5s';
        videoSlideContainer.style.transform = `translateX(-${totalWidth}px)`;
        setTimeout(() => {
            videoSlideContainer.style.transition = 'none';
            videoSlideContainer.style.transform = `translateX(0)`;
            videoSlideContainer.append(cards[0]);
            isEnabled = true;
        }, 500);
    }
})
document.getElementById('btn-video-prev').addEventListener('click', function videoPrev() {
  if(isEnabled) {
    isEnabled = false;
        const cardStyle = window.getComputedStyle(videos);
        const cardWidth = parseInt(cardStyle['width']);
        const cards = document.querySelectorAll('.videoslide');
        const margin = parseInt(cardStyle['margin-right']);
        const totalWidth = margin + cardWidth;
        videoSlideContainer.style.transition = 'transform 0.5s';
        videoSlideContainer.style.transform = `translateX(${totalWidth}px)`;
        setTimeout(() => {
            videoSlideContainer.style.transition = 'none';
            videoSlideContainer.style.transform = `translateX(0)`;
            videoSlideContainer.prepend(cards[cards.length - 1]);
            isEnabled = true;
        }, 500);
  }
})

const activeVideoDot = n => {
    for(videodot of videoDots) {
        videodot.classList.remove('videoactive');
    }
    videoDots[n].classList.add('videoactive');
}

const prepareCurrentVideoSlide = inde => {
    activeVideoDot(inde);
}

videoDots.forEach((item, indexVideoDot) => {
    item.addEventListener('click', () => {
        index = indexVideoDot;
        prepareCurrentVideoSlide(index)
    })

})
