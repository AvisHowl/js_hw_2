// Первое задание
function sayJS() {
	console.log("Я учу JavaScript!");
}
sayJS();
// Второе задание
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
const prevButton = document.querySelector(".btnPrev");
const nextButton = document.querySelector(".btnNext");

const gallery = [img1, img2, img3];
const galleryCount = gallery.length;
let galleryIndex = 0;

prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

function showPreviousImage() {
	galleryIndex = (galleryIndex - 1 + galleryCount) % galleryCount;
	updateImage();
}

function showNextImage() {
	galleryIndex = (galleryIndex + 1) % galleryCount;
	updateImage();
}

function updateImage() {
	gallery.forEach((image, index) => {
		if (index === galleryIndex) {
			image.style.display = "block";
		} else {
			image.style.display = "none";
		}
	});
}

updateImage();
