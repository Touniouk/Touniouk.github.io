// Carousels
let carousels = document.querySelectorAll(".carousel");
for (let carousel of carousels) {
	let currentIndex = 0;
	let images = carousel.querySelectorAll("img");
	let imageContainer = carousel.querySelector(".carousel .img-container");

	carousel.querySelector(".button-container.left .button").addEventListener("click", function(e) {
	  slide(currentIndex = mod(currentIndex - 1, images.length));
	});

	carousel.querySelector(".button-container.right .button").addEventListener("click", function(e) {
	  slide(currentIndex = mod(currentIndex + 1, images.length));
	});

	function slide(index) {
	  imageContainer.style.transform = `translate(-${carousel.offsetWidth*index}px,0)`;
	}
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

let imagesToZoom = document.querySelectorAll("img.zoom");
let modal = document.querySelector(".modal-container");
let body = document.querySelector('body');
for (let imageToZoom of imagesToZoom) {
	imageToZoom.addEventListener('click', function(e) {
		body.style.overflow = 'hidden';
		modal.style.backgroundImage = `url(${this.src})`;
		modal.classList.remove('hidden');
	});
}
modal.addEventListener('click', (e) => {
	modal.classList.add('hidden');
	body.style.overflow = 'auto';
});

// See images in full screen
// $('img[zoom]').addClass('img-enlargeable').click(function() {
//   var src = $(this).attr('src');
//   var modal;

//   function removeModal() {
//     modal.remove();
//     $('body').off('keyup.modal-close');
//   }
//   modal = $('<div>').css({
//     background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
//     backgroundSize: 'contain',
//     width: '100%',
//     height: '100%',
//     position: 'fixed',
//     zIndex: '10000',
//     top: '0',
//     left: '0',
//     cursor: 'zoom-out'
//   }).click(function() {
//     removeModal();
//   }).appendTo('body');
//   //handling ESC
//   $('body').on('keyup.modal-close', function(e) {
//     if (e.key === 'Escape') {
//       removeModal();
//     }
//   });
// });