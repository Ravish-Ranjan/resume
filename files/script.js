const pads = document.getElementsByClassName("pad");
const padns = document.getElementsByClassName("padn");
const txts = document.getElementsByClassName("infotxt");
const tabs = document.getElementsByClassName("tabbut");
const tabbar = document.querySelector(".ancbar");
const nav = document.getElementById("nav");
let at = 2;
let displayed = 0;
tabs[displayed].style.backgroundColor = "#681a41";
function swt(ind) {
	txts[displayed].classList.remove("show");
	tabs[displayed].style.backgroundColor = "hsl(337, 13%, 52%)";

	tabs[ind].style.backgroundColor = "#681a41";
	txts[ind].classList.add("show");

	tabs[ind].scrollIntoView({inline:"center"})
	displayed = ind;
	shownav();
}
function scrollDiv(direction) {
	const scrollAmount = 30;
	const vw = window.innerWidth / 100;
	if (direction === "left") {
		tabbar.scrollLeft -= scrollAmount * vw;
	} else if (direction === "right") {
		tabbar.scrollLeft += scrollAmount * vw;
	}
}
let tog = true;
function shownav(open = tog) {
	nav.style.transform = (open)?"translateY(0%)":"translateY(-100%)";
	tog = !tog;
}
