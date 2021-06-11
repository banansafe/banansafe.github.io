
 let images = document.querySelectorAll('.slider-item'),
 slider = document.querySelector('.slider'),
 sliderLine = document.querySelector('.slider-line'),
 btnNext = document.querySelector('.slider-next'),
 btnPrev = document.querySelector('.slider-prev'),

 count = 0,
 widthSlider;

function init() {
 widthSlider = slider.clientWidth;
 console.log(widthSlider);

 for (let i = 0; i < images.length; i++) {
     images[i].style.width  = widthSlider + "px";
 }
 sliderLine.style.width= widthSlider * images.length + "px";
}
window.addEventListener('resize', init);
init();

function move(){
 sliderLine.style.transform = 'translate(-' + count * widthSlider + 'px';
}

function moveForverd(){
count++;
if (count > images.length - 1){
  count=0;
}
move();


}

function moveBack(){
count--;
if (count < 0 ){
 count= images.length - 1
}
move();


}
btnNext.onclick = moveForverd;
btnPrev.onclick= moveBack;
setInterval(moveForverd,5000);
