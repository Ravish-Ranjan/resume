const pads = document.getElementsByClassName("pad");
const padns = document.getElementsByClassName("padn");
const txts = document.getElementsByClassName("infotxt");
const tabs = document.getElementsByClassName("tabbut");
const tabbar = document.querySelector(".ancbar");
let at = 2;
let displayed = 0;
// for (let i = 0; i < pads.length; i++) {
//     pads[i].style.transform = `translateX(${3*i-7}%) scaleX(1.05)`;
// }
// for (let i = 0; i < padns.length; i++) {
//     padns[i].style.transform = `translateX(${3*i-12}%) scaleX(1.05)`;
// }
tabs[displayed].style.backgroundColor = "#6bb4a6";
function swt(ind) {
	txts[displayed].classList.remove("show");
	tabs[displayed].style.backgroundColor = "#ba6c4b";
	tabs[ind].style.backgroundColor = "#6bb4a6";
	txts[ind].classList.add("show");
	displayed = ind;
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