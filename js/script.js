// Swiper js
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	// grabCursor: true,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Nav open close
const body = document.querySelector('body');
const navMenu = body.querySelector('.menu-content');
const navCloseBtn = navMenu.querySelector('.navClose-btn');
const navOpenBtn = body.querySelector('.navOpen-btn');

if(navMenu && navOpenBtn){
	navOpenBtn.addEventListener("click", () =>{
		navMenu.classList.add("open");
		body.style.overflowY = "hidden";
	})
}
if(navMenu && navCloseBtn){
	navCloseBtn.addEventListener("click", () =>{
		navMenu.classList.remove("open");
		body.style.overflowY = "scroll";
	})
}

// Change header bg color
window.addEventListener("scroll", () => {
	const scrollY = window.pageYOffset;

	if (scrollY > 5) {
		document.querySelector(".header").classList.add("header-active");
	} else{
		document.querySelector(".header").classList.remove("header-active");
	}

	const scrollUpBtn = document.querySelector(".scrollUp-btn");
	if (scrollY > 250){
		scrollUpBtn.classList.add("scrollUpBtn-active")
	} else{
		scrollUpBtn.classList.remove("scrollUpBtn-active")
	}
})

// Catalog
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{
    filterItem.onclick = (selectedItem)=>{
        if (selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name");
                if ((filterImages == filterName) || filterName == "all") {
                    image.classList.remove("hide");
                    image.classList.add("show");
                }
                else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
}

// Scroll Reveal Animation
const sr = ScrollReveal({
	origin: 'top',
	distance:'60px',
	duration: 2500,
	delay: 400,
})
sr.reveal('.section-subtitle, .section-title, .section-description, .brand-image, .testmonial, .newsletter, .logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links', {interval:100,})
sr.reveal('.about-imageContent, .menu-items', {origin: 'left'})
sr.reveal('.about-details, time-table, .content-title', {origin: 'right'})


// Nav link indicator
	// const sections = document.querySelectorAll('section[id]');
	// sections.forEach(section =>{
	// 	const sectionHeight = section.offsetHeight,
	// 	      sectionTop = section.offsetTop - 100;

	// 	      // let navId = document.querySelector('.menu-content a[href*=' #$(section.id) ']');
	// 	      // console.log(navId);
	// 	// if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
	// 	// 	navId.classList.add("active-navlink");
	// 	// }else{
	// 	// 	navId.classList.remove("active-navlink");
	// 	// }
	// })
	// console.log(sections);