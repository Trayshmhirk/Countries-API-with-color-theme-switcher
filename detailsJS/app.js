// instantiate classes
const countries = new CountriesAPI();
const detailUI = new CountryDetail();


// variables
const lightMode = document.getElementById('color-switch-light');
const darkMode = document.getElementById('color-switch-dark');
const logo = document.querySelector('.logo');
const backBttn = document.getElementById('back-bttn');


// theme modes variables
const darkTheme = document.querySelectorAll('.dark-mode');
const lightTheme = document.querySelectorAll('.light-mode');
const darkElements = document.querySelectorAll('.dark-mode-elements');
const lightElements = document.querySelectorAll('.light-mode-elements');
const darkText = document.querySelectorAll('.dark-mode-text');
const lightText = document.querySelectorAll('.light-mode-text');


// event listeners
function eventListeners() {
    // reload the page
    logo.addEventListener('click', () => {
        location.reload();
    });

    // back button event listener to return to home page
    backBttn.addEventListener('click', backToHomePage);
}
eventListeners();



// functions

// switches to dark mode
function switchDarkMode() {
    // ui function to remove light mode properties
    detailUI.switchToDarkMode();
}

// switches to light mode
function switchLightMode() {
    // ui function to return to light mode
    detailUI.switchToLightMode();
}

// returns to home page after clicking the back button
function backToHomePage() {
    // function to return to previous page
    detailUI.returnHome();
}