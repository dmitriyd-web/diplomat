$(document).ready(function(){
	$(".timeline-year").on("click", function(e) {
		/*
		if ( $(this).hasClass("active") ) {
			e.preventDefault()
		} else {
			$(".single-title").removeClass("current")
			$(".single-title.title-" + $(this).attr("data-year")).addClass("current")
			$(".single-info").removeClass("current")
			$(".single-info.item-" + $(this).attr("data-year")).addClass("current")
			$(".single-item__images").removeClass("current")
			$(".single-item__images.item-" + $(this).attr("data-year")).addClass("current")
			$(".timeline-year").removeClass("active")
			for (let i = 1; i <= $(this).attr("data-year"); i++) {
				$(".timeline-year.item-" + i).addClass("active")
			}
			for (let j = 1; j <= $(this).attr("data-year"); j++) {
				$(".timeline-progress").removeClass("progress-" + j)
			}
			$(".timeline-progress").addClass("progress-" + $(this).attr("data-year"))
		}	
		*/
		$(".single-title").removeClass("current")
		$(".single-title.title-" + $(this).attr("data-year")).addClass("current")
		$(".single-info").removeClass("current")
		$(".single-info.item-" + $(this).attr("data-year")).addClass("current")
		$(".single-item__images").removeClass("current")
		$(".single-item__images.item-" + $(this).attr("data-year")).addClass("current")
		$(".timeline-year").removeClass("active")
		for (let i = 1; i <= $(this).attr("data-year"); i++) {
			$(".timeline-year.item-" + i).addClass("active")
		}
		for (let j = 1; j <= 5; j++) {
			$(".timeline-progress").removeClass("progress-" + j)
		}
		$(".timeline-progress").addClass("progress-" + $(this).attr("data-year"))
	})
})