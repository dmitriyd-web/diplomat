//	swiper main

const fraction = document.getElementById("current-slide")
const swiperMain = document.querySelectorAll(".swiper-slide-list")
const slideCount = swiperMain.length
const allSlides = document.getElementById("all-slides")
allSlides.innerText = swiperMain.length
fraction.textContent = '1'

if ( swiperMain ) {
	
	const swiperList = new Swiper('.swiper-list', {
		// Optional parameters
		loop: true,

		// If we need pagination
		pagination: {
			el: ".swiper-pagination"
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
	
}

//	mobile sliders

	const uslugiSwiperMobile = new Swiper('.uslugi-swiper-mobile', {
		// Optional parameters
		loop: true,
	});
	
	const advantagesSwiperMobile = new Swiper('.advantages-swiper-mobile', {
		// Optional parameters
		loop: true,
	});
	
$(document).ready(function(){
	$('.owl-carousel-1').owlCarousel({
		margin: 0,
		items: 8,
		loop: true,
		nav: true
	});
});

