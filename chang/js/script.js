let page = 0;
let postion = 0;
const IMAGE_WIDTH = 1200;
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const images = document.querySelector(".images")
 
// prev
function prev(){
  if(page > 0){
    nextBtn.removeAttribute("disabled")
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    page = page - 1;
  }else if(page == 0){
    prevBtn.setAttribute('disabled', 'true')
  }
}
// next
function next(){
  if(page < 2){
    prevBtn.removeAttribute("disabled")
    postion -= IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    page = page + 1;
  }else if(page == 2){
    nextBtn.setAttribute('disabled', 'true')
  }
}
 
// button
function init(){
  prevBtn.setAttribute('disabled', 'true')
  prevBtn.addEventListener("click", prev)
  nextBtn.addEventListener("click", next)
}
 
init();