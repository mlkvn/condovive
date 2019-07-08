import countriesJSON from 'countrycitystatejson';
import logoInverse from '../static/logo_condovive_inverse.svg';
import logoRegular from '../static/logo_condovive_inverse.png';
import '../css/style.css';
// Menu Responsive
const openButton = document.getElementById('open-menu-button');
const closeButton = document.getElementById('close-menu-button');

const toggleMenu = function(event) {
	event.preventDefault();
	const menuResponsive = document.querySelector('.menu-responsive');

	if (event.target.id === 'open-menu-button') {
		menuResponsive.classList.add('menu-visible');
	}

	if (event.target.id === 'close-menu-button') {
		menuResponsive.classList.remove('menu-visible');
	}
};

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

// Navbar Collapse
let scrollPos = 0;
const nav = document.querySelector('.navbar');
const logo = document.getElementById('main-logo');
const logoResponsive = document.getElementById('main-logo-responsive');
const menuOptions = document.getElementsByClassName('header__top__item');

const checkPosition = function() {
	const windowY = window.scrollY;
	if (windowY < scrollPos) {
		// Scrolling UP
		nav.classList.add('navbar-visible');
		nav.classList.remove('navbar-hidden');
	} else {
		// Scrolling DOWN
		nav.classList.add('navbar-hidden');
		nav.classList.remove('navbar-visible');
	}

	if (windowY > window.innerHeight) {
		nav.classList.add('navbar--inverse');
		logo.src = `${logoInverse}`;
		logoResponsive.src = `${logoInverse}`;
		for (let i = 0; i < menuOptions.length; i++) {
			menuOptions[i].classList.add('text--blue');
		}
	} else if (!nav.classList.contains('ignore--color--change')) {
		nav.classList.remove('navbar--inverse');
		logo.src = `${logoRegular}`;
		logoResponsive.src = `${logoRegular}`;
		for (let i = 0; i < menuOptions.length; i++) {
			menuOptions[i].classList.remove('text--blue');
		}
	}

	scrollPos = windowY;
};

window.addEventListener('scroll', checkPosition);

// FAQ Collapse
const faqSection = document.getElementsByClassName('FAQ__container');
const toggleVisibility = function(event, faqIndex) {
	event.preventDefault();

	const faqButton = document.getElementsByClassName('FAQ__btn')[faqIndex];
	const faqRes = document.getElementsByClassName('FAQ__response')[faqIndex];

	if (faqRes.classList.contains('FAQ__content__hide')) {
		faqRes.classList.remove('FAQ__content__hide');
		faqButton.innerHTML = '-';
	} else {
		faqRes.classList.add('FAQ__content__hide');
		faqButton.innerHTML = '+';
	}
};

if (faqSection.length > 0) {
	faqSection[0].addEventListener('click', function(event) {
		toggleVisibility(event, 0);
	});

	faqSection[1].addEventListener('click', function(event) {
		toggleVisibility(event, 1);
	});

	faqSection[2].addEventListener('click', function(event) {
		toggleVisibility(event, 2);
	});
}

// Countries
const condoviveCountries = [
	'Argentina',
	'Bolivia',
	'Chile',
	'Colombia',
	'Costa Rica',
	'Ecuador',
	'United States',
	'El Salvador',
	'Honduras',
	'Mexico',
	'Panama',
	'Paraguay',
	'Peru',
	'Dominican Republic',
	'Uruguay',
	'Venezuela'
];

const countriesPackage = countriesJSON.getCountries();

const countries = condoviveCountries.map(countryCondovive =>
	countriesPackage.find(country => country.name === countryCondovive)
);

const selectCountries = document.getElementsByClassName('countries-select');

for (let i = 0; i < selectCountries.length; i++) {
	// Setting Mexico as first option
	const countryOption = document.createElement('option');
	const mexico = countries.find(country => country.name === 'Mexico');
	countryOption.value = mexico.name;
	countryOption.textContent = `${mexico.emoji} ${mexico.name}`;
	selectCountries[i].appendChild(countryOption);

	// Adding countries to select node
	countries.filter(country => country.name !== 'Mexico').forEach(country => {
		const countryOption = document.createElement('option');
		countryOption.value = country.name;
		countryOption.textContent = `${country.emoji} ${country.name}`;
		selectCountries[i].appendChild(countryOption);
	});
}
