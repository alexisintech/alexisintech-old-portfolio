// ===================================================================
// ~~~~ BIO SWITCHER 
// ===================================================================
// Credit to Jason Lengstorf - https://jason.af/

// bio options in an HTML template tag because it's content
const bios = document.querySelector('#bios').content.cloneNode(true);
const bioEl = document.querySelector('.bio');

// Jason Miller suggested using event delegation to keep this clean
// https://twitter.com/_developit/status/1483104367981076484
const options = document.querySelector('.bio-length-options');
options.addEventListener('change', (event) => {
  const nextBio = bios.querySelector(`[data-length=${event.target.value}]`);

  bioEl.innerHTML = nextBio.innerHTML;
});


// ===================================================================
// ~~~~ MULTI SLIDESHOWS
// ===================================================================

let slideIndex = [1,1,1,1]; // Chooses the indexes of array "slideId" (on line 25)
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"] // Classed the members of each slideshow group with different CSS classes. Placed them in array
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}