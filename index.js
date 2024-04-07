let sliderTrack = document.querySelector(".track")
let sliderDots = document.querySelectorAll(".slider__dots li")
let topGameMinecraft = document.querySelector(".top-game-minecraft")
let topGameRdr = document.querySelector(".top-game-rdr")
let topGameNfs = document.querySelector(".top-game-nfs")
let topGameRust = document.querySelector(".top-game-rust")
let topGameForest = document.querySelector(".top-game-forest")
let topGamePubg = document.querySelector(".top-game-pubg")
let topGameStray = document.querySelector(".top-game-stray")
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

function myImg() {
	document.getElementById("img_1").src = "img/Minecraft21.png"
	topGameMinecraft.style.color = "black"
	topGameRdr.style.color = "gray"
	topGameNfs.style.color = "gray"
	topGameRust.style.color = "gray"
	topGameForest.style.color = "gray"
	topGamePubg.style.color = "gray"
	topGameStray.style.color = "gray"
}

function myImg2() {  
	document.getElementById("img_1").src = "img/image 18.png"
	topGameRdr.style.color = "black"
	topGameMinecraft.style.color = "gray"
	topGameNfs.style.color = "gray"
	topGameRust.style.color = "gray"
	topGameForest.style.color = "gray"
	topGamePubg.style.color = "gray"
	topGameStray.style.color = "gray"
}

function myImg3() {
	document.getElementById("img_1").src = "img/Need for Speed.png"
	topGameNfs.style.color = "black"
	topGameMinecraft.style.color = "gray"
	topGameRdr.style.color = "gray"
	topGameRust.style.color = "gray"
	topGameForest.style.color = "gray"
	topGamePubg.style.color = "gray"
	topGameStray.style.color = "gray"
}

function myImg4() {
	document.getElementById("img_1").src = "img/slider2.png"
	topGameRust.style.color = "black"
	topGameMinecraft.style.color = "gray"
	topGameRdr.style.color = "gray"
	topGameNfs.style.color = "gray"
	topGameForest.style.color = "gray"
	topGamePubg.style.color = "gray"
	topGameStray.style.color = "gray"
}
function myImg5() {
	document.getElementById("img_1").src = "img/image 26.png"
	topGameForest.style.color = "black"
	topGameMinecraft.style.color = "gray"
	topGameRdr.style.color = "gray"
	topGameRust.style.color = "gray"
	topGameNfs.style.color = "gray"
	topGamePubg.style.color = "gray"
	topGameStray.style.color = "gray"
}
function myImg6() {
	document.getElementById("img_1").src = "img/Pubg.png"
	topGamePubg.style.color = "black"
	topGameMinecraft.style.color = "gray"
	topGameRdr.style.color = "gray"
	topGameNfs.style.color = "gray"
	topGameRust.style.color = "gray"
	topGameForest.style.color = "gray"
	topGameStray.style.color = "gray"
}
function myImg7() {
	document.getElementById("img_1").src = "img/Stray.png"
	topGameStray.style.color = "black"
	topGameMinecraft.style.color = "gray"
	topGameRdr.style.color = "gray"
	topGameNfs.style.color = "gray"
	topGameRust.style.color = "gray"
	topGameForest.style.color = "gray"
	topGamePubg.style.color = "gray"
}

