document.addEventListener('DOMContentLoaded', function(){

	//  scroll

	let scrollpos = window.scrollY

	const header = document.querySelector(".fixed-menu")
	const scrollChange = 1

	const add_class_on_scroll = () => header.classList.add("scroll-menu")
	const remove_class_on_scroll = () => header.classList.remove("scroll-menu")

	window.addEventListener('scroll', function() { 
		scrollpos = window.scrollY;

		if (scrollpos >= scrollChange + 52) { add_class_on_scroll() }
		else { remove_class_on_scroll() }
	
	})

	//	mobile menu

	$("header .top-menu__mobile").on("click", function(e){
		$("header .top-menu__mobile, header .open-menu__mobile").toggleClass("open")
	})
	
	$(".open-menu__mobile .header-menu a").on("click", function(e){
		if ( ( $(this).parent("li").hasClass("has-child") ) && !( $(this).parent("li").hasClass("open-child") ) ) {
			e.preventDefault()
			$(this).parent("li").addClass("open-child")
		}
	})

	//	mobile menu footer
	
	$(".footer-mobile__menu a").on("click", function(e){
		if ( ( $(this).parent("li").hasClass("has-child") ) && !( $(this).parent("li").hasClass("open-child") ) ) {
			e.preventDefault()
			$(this).parent("li").addClass("open-child")
		}
	})
	
	//	reviewsSlider

	const reviewsSlider = document.querySelector(".reviews-slider")
	if ( reviewsSlider ) {
		const buySlider = new Swiper('.reviews-slider', {
			// Optional parameters
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});
	}

	//	gallery

	Fancybox.bind('[data-fancybox="gallery"]', {}); 

	/*
	//	accordion
	$(".accordion-title").on("click", function(){
		if ( $(this).parent(".accordion-question").hasClass("open") ) {
			$(this).parent(".accordion-question").removeClass("open")
		}	else {
			$(".accordion-question").removeClass("open")
			$(this).parent(".accordion-question").addClass("open")
		}
	})
	
	//	faq-more
	$(".faq-more").on("click", function(e){
		e.preventDefault()
		$(".accordion-question").css("display", "block")
	})
	
	//	sliders
	if ( $(document).width() <= 800 ) {
		const reasonSteps = document.querySelector(".reason-steps")
		if ( reasonSteps ) {
			const reasonSlider = new Swiper('.reason-steps', {
				// Optional parameters
				loop: true,
			});
		}
		
		//	mobile menu
		$("header .mobile-burger").on("click", function(e){
			$("header .mobile-burger, .mobile-menu").toggleClass("open")
		})
		
		$(".mobile-menu .header-menu a").on("click", function(e){
			if ( ( $(this).parent("li").hasClass("has-child") ) && !( $(this).parent("li").hasClass("open-child") ) ) {
				e.preventDefault()
				$(this).parent("li").addClass("open-child")
			}	else {
				$(".accordion-question").removeClass("open")
				$(this).parent(".accordion-question").addClass("open")
			}
		})
	}
	if ( $(document).width() <= 576 ) {
		const buyMoobileSlider = document.querySelector(".buy-moobile-slider")
		if ( buyMoobileSlider ) {
			const buySlider = new Swiper('.buy-moobile-slider', {
				// Optional parameters
				loop: true,
			});
		}
	}
	
	//	animation
	
	if ( window.innerWidth >= 1200 ) {
		const showItems = () => {
			$(".primary .primary-bg, .primary .primary-content h1, .primary .primary-content p, .primary .primary-content img").addClass("show")
		}

		setTimeout(showItems, 500);
		
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

		ScrollSmoother.create({
			wrapper: '.wrapper',
			content: '.content',
			smoot: 1.5,
			effects: true,
			once: true 
		})

		let showFromTop = gsap.utils.toArray('.about .row, .reason .title h2, .reason .reason-product, .photos .title p, .photos .title h2, .photos .photos-buttons, .buy .title p, .buy .title h2, .faq .title p, .faq .title h2, .faq .accordion, .faq .faq-more')

		showFromTop.forEach(item => {
			gsap.fromTo(item, { opacity: 0 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-550',
					end: '-500',
					scrub: true,
					once: true 
				}
			})
		})
		
		let showFromLeft = gsap.utils.toArray('.photos .photos-item, .photos .photos-item')

		showFromLeft.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: -200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-550',
					end: '-500',
					scrub: true,
					once: true 
				}
			})
		})
		
		let showFromLeftReason_1 = gsap.utils.toArray('.reason .reason-steps .step-single.step-single__1, .reason .reason-steps .step-single.step-single__4')

		showFromLeftReason_1.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: -200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-550',
					end: '-500',
					scrub: true,
					once: true 
				}
			})
		})
		
		let showFromLeftReason_2 = gsap.utils.toArray('.reason .reason-steps .step-single.step-single__2, .reason .reason-steps .step-single.step-single__5')

		showFromLeftReason_2.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: -200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-750',
					end: '-700',
					scrub: true,
					once: true 
				}
			})
		})
		
		let showFromLeftReason_3 = gsap.utils.toArray('.reason .reason-steps .step-single.step-single__3, .reason .reason-steps .step-single.step-single__6')

		showFromLeftReason_3.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: -200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-950',
					end: '-900',
					scrub: true,
					once: true 
				}
			})
		})
		
		let showFromRight = gsap.utils.toArray('.about .bg-line-1, .photos .bg-line-2, .faq .bg-line-3')

		showFromRight.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: 200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-550',
					end: '-500',
					scrub: true,
					once: true 
				}
			})
		})
		
		let showFromBottom = gsap.utils.toArray('.photos .photos-item.photos-item__1, .photos .photos-item.photos-item__5, .photos .photos-item.photos-item__bg')

		showFromBottom.forEach(item => {
			gsap.fromTo(item, { y: 0 }, {
				y: -66,
				scrollTrigger: {
					trigger: item,
					start: '-350',
					end: '-300',
					scrub: true,
					once: true 
				}
			})
		})
		
		let showFromBottomShow = gsap.utils.toArray('.buy .buy-item')

		showFromBottomShow.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: -100 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-550',
					end: '-500',
					scrub: true,
					once: true 
				}
			})
		})
		
		const footer = document.querySelector(".footer-inner")
		const bodyHeight = document.body.offsetHeight
		window.onscroll = onScroll;
		console.log(bodyHeight)
		function onScroll (e) {
			let top = window.pageYOffset;
			if (bodyHeight - 1200 < top) {
				footer.classList.remove("full-width")

			} else if (bodyHeight > top) {
				footer.classList.add("full-width")
			}
		}
	}
	*/
})