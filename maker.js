const images = document.querySelectorAll('.images');
const blurBG = document.querySelector('.blur');

let grow = false;

function toggleExpand(e) {
  this.classList.toggle('expand');
  console.log(e);
}

function toggleBlur(e) {
  if (grow === true) return;
  if (grow === false) {
    blurBG.classList.toggle('blurry');
    grow = true;
  }
}

images.forEach((image) => image.addEventListener('click', toggleExpand));
images.forEach((image) => image.addEventListener('transitionstart', toggleBlur));
