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

let slideIndex = [1,2];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

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