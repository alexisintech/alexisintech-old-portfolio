/*
 * -----------------------------------------------------------------------------
 * bio switcher
 * -----------------------------------------------------------------------------
 */

// bio options in an HTML template tag because it's content
// const bios = document.querySelector('#bios').content.cloneNode(true);
// const bioEl = document.querySelector('.bio');

// // Jason Miller suggested using event delegation to keep this clean
// // https://twitter.com/_developit/status/1483104367981076484
// const options = document.querySelector('.bio-length-options');
// options.addEventListener('change', (event) => {
//   const nextBio = bios.querySelector(`[data-length=${event.target.value}]`);

//   bioEl.innerHTML = nextBio.innerHTML;
// });

// const inputs = document.querySelector("input")
// const bio = document.querySelector(".bio")

// if (p.classList.contains(inputs.value)) {
//     bio.innerHTML = 
// }

/*
* --
* Slideshow
* --
*/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}