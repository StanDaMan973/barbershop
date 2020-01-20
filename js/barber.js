// Testimonial Carousel 
var items = document.querySelectorAll('.Testimonials-carousel .item');
var dots = document.querySelectorAll('.carousel-indicators-tm li');
var currentItem = 0;
var isEnabled = true;



function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

function goToItem(n) {
	if (n < currentItem) {
		hideItem('to-right');
		currentItem = n;
		showItem('from-left');
	} else {
		hideItem('to-left');
		currentItem = n;
		showItem('from-right');
	}
}

function hideItem(direction) {

	isEnabled = false;
	items[currentItem].classList.add(direction);
	dots[currentItem].classList.remove('active');
	items[currentItem].addEventListener('animationend', function () {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {

	items[currentItem].classList.add('next', direction);
	dots[currentItem].classList.add('active');
	items[currentItem].addEventListener('animationend', function () {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

document.querySelector('.carousel-control.left').addEventListener('click', function () {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.carousel-control.right').addEventListener('click', function () {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

document.querySelector('.carousel-indicators-tm').addEventListener('click', function (e) {
	var target = [].slice.call(e.target.parentNode.children).indexOf(e.target);
	if (target !== currentItem && target < dots.length) {
		goToItem(target);
	}
});


let tabLinks = document.querySelectorAll('[data-tab-target]');
let tabItems = document.querySelectorAll('[data-tab-content]');


tabLinks.forEach(function(tab) {
	tab.addEventListener('click', function () {

		let target = document.querySelector(tab.dataset.tabTarget)
		

		tabItems.forEach(function (tabItems) {
			tabItems.classList.remove('active');
		});
		target.classList.add('active');

		tabLinks.forEach(function (tab) {
			tab.classList.remove('active');
		});
		tab.classList.add("active");
		target.classList.add('active');
	})
});




// goal: portfolio gallery with filtering 


// let galleryTabs = document.querySelectorAll("[data-button]");
// let galleryContent = document.querySelectorAll("[data-gallery]");
// let gallerySection = Array.from(galleryContent);


// galleryTabs.forEach(function(tab) {
// 	tab.addEventListener('click', function() {
		
		


// 		galleryTabs.forEach(function(tab) {
// 			tab.classList.remove('current');
// 		});
// 		tab.classList.add("current");


// 		gallerySection.forEach(function(tabItems) {

// 			tabItems.classList.remove("current")

// 		});
		
// 		// add current class on click to target element 
		

// 	});
// });