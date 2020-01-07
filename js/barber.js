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


// problem: I need to create a function that will display my content 
// when i click on a tab

//steps
// i need to get all the tabs and save them to a variole - $
// i need to get all the table items and save them to a variable -$
// i need to add a click event to all the elements - $
// i need to hide all the table elements
// i need to be able to remove the active class from the elements
// i need to add the active class to the tabs when clicked 
// i need to able to add the active class to tableitems and display the table


let tabLinks = document.querySelectorAll('[data-tab-target]');
let tabItems = document.querySelectorAll('[data-tab-content]');




tabLinks.forEach(function(tab){
	tab.addEventListener('click', function() {
		tab.classList.add('active');	
		for (let i = 0; i < tab.length; i++) {
			tab.classList.remove('active');
			
		}

		let target = document.querySelector(tab.dataset.tabTarget)
		tabItems.forEach(function(tabItems) {
			tabItems.classList.remove('active');
		});
		target.classList.add('active');
	})
});


