# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - REST Countries API with color theme switcher solution](#frontend-mentor---rest-countries-api-with-color-theme-switcher-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./images/screenshots/Screenshot%20(212).png)
![](./images/screenshots/Screenshot%20(213).png)
![](./images/screenshots/Screenshot%20(218).png)
![](./images/screenshots/Screenshot%20(215).png)
![](./images/screenshots/Screenshot%20(217).png)
![](./images/screenshots/Screenshot%20(216).png)
![](./images/screenshots/Screenshot%20(219).png)
![](./images/screenshots/Screenshot%20(220).png)




### Links

- Solution URL: [GitHub](https://github.com/Trayshmhirk/Countries-API-with-color-theme-switcher.git)
- Live Site URL: [Netlify](http://countries-api-color-theme-switcher.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript
- [Icons](https://fonts.google.com/) - For fontawesome icons
- [font family](https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap) - For Google fonts


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<!-- country api cards -->
    <section id="countries" class="light-mode dark-mode">
        <div class="container countries-flex">
            <!-- card info constructed in Javacript -->
        </div>
    </section>
```

```js
document.addEventListener('DOMContentLoaded', () => {
  // search for the country name that has been passed into the url from the previous page, on clicking the cards
  const urlParamsCountry = new URLSearchParams(window.location.search);
  const countryName = urlParamsCountry.get('country');

  // grab the theme passed into the url from the home page
  const urlParamsTheme = new URLSearchParams(window.location.search);
  const currentTheme = urlParamsTheme.get('theme');

  // set the theme of the detail page based on the theme received from the home page
  if (currentTheme === 'dark-mode') {
      switchDarkMode();
  } else {
      switchLightMode();
  }

  // prints the country name as the dom title
  document.title = `${countryName} | Frontend Mentor`;

  // Load the details of the selected country
  detailUI.countriesDetailInfo(countryName);
});


// function to set the event listener on the countries to load another page containing the information of the borders
setBorderEventListener(countryDetails) {
  // loop through the borders to perform the function
  Array.from(countryDetails).forEach(data => {
    // listen for a click event on the border buttons
    data.addEventListener('click', (e) => {
      const borderCountry = e.target.textContent;

      // call the api to load the countries
      countries.loadCountriesAPI()
      .then(countryData => {
        countryData.forEach(country => {
          // validate that the border country selected is the same as the country alphacode to return the country details
          if (borderCountry === country.alpha3Code) {
            // Navigate to the another detail page with the selected country name in the URL and the theme
            const countryName = country.name;
            const currentTheme = localStorage.getItem('theme');
            window.location.href = `detail.html?country=${encodeURIComponent(countryName)}&theme=${currentTheme}`;
          }
        })
      })
    })
  })
}



```

### Continued development

I would like to research better and more efficient ways of setting color themes(light and dark) and ways to save them into the local storage better.
Using react would be a better and easier way to complete this project, so i would love to repeat this using reactJS.


## Author

- Frontend Mentor - [@Trayshmhirk](https://www.frontendmentor.io/profile/Trayshmhirk)
- Twitter - [@TrayShmhirk01](https://www.twitter.com/TrayShmhirk01)

