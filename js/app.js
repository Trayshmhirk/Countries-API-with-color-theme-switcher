// instantiate classes
const countries = new CountriesAPI();
const ui = new UI();



// variables
const lightMode = document.getElementById('color-switch-light');
const darkMode = document.getElementById('color-switch-dark');
const logo = document.querySelector('.logo');

// theme modes variables
const darkTheme = document.querySelectorAll('.dark-mode');
const lightTheme = document.querySelectorAll('.light-mode');
const darkElements = document.querySelectorAll('.dark-mode-elements');
const lightElements = document.querySelectorAll('.light-mode-elements');
const darkText = document.querySelectorAll('.dark-mode-text');
const lightText = document.querySelectorAll('.light-mode-text');

// search form variables
const searchForm = document.getElementById('search-country');
const search = document.getElementById('search');
const backBttn = document.getElementById('back-bttn');


// drop down variables
const dropDown = document.getElementById('drop-down');
const options = document.getElementById('options');
const optionList = document.querySelectorAll('#options li');



// event listeners
function eventListeners() {
    // event to load the countries API
    document.addEventListener('DOMContentLoaded', defaultLightMode);

    // event to listen for a click on the darkmode switch button
    darkMode.addEventListener('click', switchDarkMode);

    // event to listen for a click on the lightmode switch button
    lightMode.addEventListener('click', switchLightMode);

    // search for the inputted country
    searchForm.addEventListener('submit', searchCountry);

    // reload the page
    logo.addEventListener('click', () => {
        window.location.reload();
    })

    // listen for event on drop down and checks for amount of clicks on it, to perform functions.
    let clickCount = 0;
    dropDown.addEventListener('click', function() {
        // checks if the click count on the dropdown is odd or even, and performs the functions depending on which is true or false
        if (clickCount % 2 === 0) {
            dropDownOptions();
        } else {
            hideDropDown();
        }
        clickCount++;
    });
}
eventListeners();



// functions

// load countries on dom loaded
function defaultLightMode() {
    // load the preferred theme from the local storage
    const savedTheme = localStorage.getItem('theme');
    const savedElementTheme = localStorage.getItem('elementTheme');

    /*
        apply the saved theme or default - 
        check if the local storage contains both themes and 
        perform the switch functions based on which is true or false
    */
    if (savedTheme === 'dark-mode' && savedElementTheme === 'dark-elements') {
        switchDarkMode();
    } else {
        switchLightMode();
    }
}

// switches to dark mode
function switchDarkMode() {
    // ui function to remove light mode properties
    ui.switchToDarkMode();
}

// switches to light mode
function switchLightMode() {
    // ui function to return to light mode
    ui.switchToLightMode();
}

// search for a country
function searchCountry(e) {
    e.preventDefault();

    // validate that the search input is not empty
    const searchValue = search.value;
    if (searchValue === '') {
        // display an error
        ui.error();
    } else {
        // search for, and print countries that matches the search input value
        ui.searchCountries(searchValue);
    }
}

// function to drop down the options menu
function dropDownOptions() {
    ui.dropDownOption();
}

// hide the options menu
function hideDropDown() {
    ui.removeDropDown();
}
