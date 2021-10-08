// video progress
const progress = document.querySelector('.progress');

progress.addEventListener('input', function() {
const value = this.value;
this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})

const volume = document.querySelector('.volume');

volume.addEventListener('input', function() {
const value = this.value;
this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})
