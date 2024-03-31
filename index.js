let sliderTrack = document.querySelector(".track")
let sliderDots = document.querySelectorAll(".slider__dots li")
let currSlides = 0

let autoPlaySlider = setInterval(function () {
	currSlides++

	if (currSlides === 5) {
		currSlides = 0
	}

	removeActiveClass(sliderDots, "active")
	sliderTrack.style.left = `-${currSlides * 100}vw`
	sliderDots[currSlides].classList.add("active")
}, 2000)

sliderDots.forEach((li, index) => {
	li.addEventListener("click", function () {
		clearInterval(autoPlaySlider)
		removeActiveClass(sliderDots, "active")
		sliderTrack.style.left = `-${index * 100}vw`
		li.classList.add("active")
	})
})

function removeActiveClass(selectors, nameActiveClass) {
	selectors.forEach(el => el.classList.remove(nameActiveClass))
}