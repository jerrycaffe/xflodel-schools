let i =0;
let slider = document.querySelector('.showcase');
let images = [];
images[0] = '/resources/img/check2.jpg';
images[1] = '/resources/img/check.jpg';
images[2] = '/resources/img/China-online-education.jpg';

function changeImage(){
  slider.style.background = `url(${images[i]}) no-repeat center center/cover`;
  if(i < images.length-1){
    i++
  }else {
    i=0;}
}

setInterval("changeImage()", 3000);

// js for navigation
function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
}
// close navigation after clicking on the link
function closeOnSelect(){
  document.getElementById("closeOnSelect").addEventListener('click', closeNav());
}