class CountryDetail {
    
    // function to remove all light theme to switch to dark theme
    switchToDarkMode() {
        // remove light mode button
        darkMode.style.display = 'none';
        lightMode.style.display = 'block';
        lightMode.classList.add('dark-mode-text');

        // remove dark theme
        lightTheme.forEach(theme =>  {
            theme.classList.add('dark-mode');
            theme.classList.remove('light-mode');
        })

        // remove dark elements
        lightElements.forEach(element => {
            element.classList.add('dark-mode-elements');
        })

        // remove dark text
        lightText.forEach(text => {
            text.classList.add('dark-mode-text');
        })
    }

    // function to revert to default light mode
    switchToLightMode() {
        // remove light mode button
        lightMode.style.display = 'none';
    
        // remove dark theme
        darkTheme.forEach(theme =>  {
            theme.classList.remove('dark-mode');
        })

        // remove dark elements
        darkElements.forEach(element => {
            element.classList.remove('dark-mode-elements');
        })

        // remove dark text
        darkText.forEach(text => {
            text.classList.remove('dark-mode-text');
        })

        // removing the color on the dark mode button
        darkMode.style.display = 'block';
        darkMode.classList.remove('dark-mode-text');
    }

    // function to call api for the country details that with the target country passed into the function from the url
    countriesDetailInfo(cardName) {
        // load country api 
        countries.loadCountriesAPI()
        .then(countryData => {
            // grab the div container which the country details will be passed into
            const countryDetail = document.querySelector('#country-detail .detail-flex');
            
            countryData.forEach(country => {
                // validate if the cardName (country from the home page cards) is equal to the country name from the loading api
                if (cardName === country.name) {

                    let html;
                    // validates if the country does not have any borders and doesn't print any border in the dom.
                    if (country.borders === undefined) {
                        // create the template for the country details with borders
                        html = `
                            <div class="image">
                                <img src="${country.flag}" alt="${country.name} flag">
                            </div>

                            <div class="info">
                                <div class="country-name">
                                    <h1>${country.name}</h1>
                                </div>

                                <div class="more-info-flex">
                                    <div>
                                        <p><span class="span-bold">Native name</span>: ${country.nativeName}</p>
                                        <p><span class="span-bold">Population</span>: ${country.population}</p>
                                        <p><span class="span-bold">Region</span>: ${country.region}</p>
                                        <p><span class="span-bold">Sub Region</span>: ${country.subregion}</p>
                                        <p><span class="span-bold">Capital</span>: ${country.capital}</p>
                                    </div>
                                    <div>
                                        <p><span class="span-bold">Top Level Domain</span>: ${country.topLevelDomain[0]}</p>
                                        <p><span class="span-bold">Currencies</span>: ${country.currencies[0].code}, ${country.currencies[0].symbol}</p>
                                        <p><span class="span-bold">Languages</span>: ${country.languages[0].name}</p>
                                    </div>
                                </div>
                            </div>
                        `
                    }

                    // validates if the country has borders and prints the borders in the dom
                    if (country.borders !== undefined) {
                        // create the template for the country details with borders
                        html = `
                            <div class="image">
                                <img src="${country.flag}" alt="${country.name} flag">
                            </div>

                            <div class="info">
                                <div class="country-name">
                                    <h1>${country.name}</h1>
                                </div>

                                <div class="more-info-flex">
                                    <div>
                                        <p><span class="span-bold">Native name</span>: ${country.nativeName}</p>
                                        <p><span class="span-bold">Population</span>: ${country.population}</p>
                                        <p><span class="span-bold">Region</span>: ${country.region}</p>
                                        <p><span class="span-bold">Sub Region</span>: ${country.subregion}</p>
                                        <p><span class="span-bold">Capital</span>: ${country.capital}</p>
                                    </div>
                                    <div>
                                        <p><span class="span-bold">Top Level Domain</span>: ${country.topLevelDomain[0]}</p>
                                        <p><span class="span-bold">Currencies</span>: ${country.currencies[0].code}, ${country.currencies[0].symbol}</p>
                                        <p><span class="span-bold">Languages</span>: ${country.languages[0].name}</p>
                                    </div>
                                </div>

                                <div class="border-countries">
                                    <p><span class="span-bold">Border Countries</span>:</p>

                                    <div class="border">
                                        <button id="border-id" class="light-mode-elements dark-mode-elements">${country.borders[0]}</button>
                                        <button id="border-id" class="light-mode-elements dark-mode-elements">${country.borders[1]}</button>
                                        <button id="border-id" class="light-mode-elements dark-mode-elements">${country.borders[2]}</button>
                                    </div>
                                </div>
                            </div>
                        `
                    }

                    // validate that the country has only 2 borders and prints only 2 borders in the dom
                    if (country.borders !== undefined && country.borders[2] === undefined) {
                        // create the template for the country details with borders
                        html = `
                            <div class="image">
                                <img src="${country.flag}" alt="${country.name} flag">
                            </div>

                            <div class="info">
                                <div class="country-name">
                                    <h1>${country.name}</h1>
                                </div>

                                <div class="more-info-flex">
                                    <div>
                                        <p><span class="span-bold">Native name</span>: ${country.nativeName}</p>
                                        <p><span class="span-bold">Population</span>: ${country.population}</p>
                                        <p><span class="span-bold">Region</span>: ${country.region}</p>
                                        <p><span class="span-bold">Sub Region</span>: ${country.subregion}</p>
                                        <p><span class="span-bold">Capital</span>: ${country.capital}</p>
                                    </div>
                                    <div>
                                        <p><span class="span-bold">Top Level Domain</span>: ${country.topLevelDomain[0]}</p>
                                        <p><span class="span-bold">Currencies</span>: ${country.currencies[0].code}, ${country.currencies[0].symbol}</p>
                                        <p><span class="span-bold">Languages</span>: ${country.languages[0].name}</p>
                                    </div>
                                </div>

                                <div class="border-countries">
                                    <p><span class="span-bold">Border Countries</span>:</p>

                                    <div class="border">
                                        <button id="border-id" class="light-mode-elements dark-mode-elements">${country.borders[0]}</button>
                                        <button id="border-id" class="light-mode-elements dark-mode-elements">${country.borders[1]}</button>
                                    </div>
                                </div>
                            </div>
                        `
                    }

                    // validate that the country has only 1 border to print only 1 borders in the dom
                    if (country.borders !== undefined && country.borders[1] === undefined) {
                        // create the template for the country details with borders
                        html = `
                            <div class="image">
                                <img src="${country.flag}" alt="${country.name} flag">
                            </div>

                            <div class="info">
                                <div class="country-name">
                                    <h1>${country.name}</h1>
                                </div>

                                <div class="more-info-flex">
                                    <div>
                                        <p><span class="span-bold">Native name</span>: ${country.nativeName}</p>
                                        <p><span class="span-bold">Population</span>: ${country.population}</p>
                                        <p><span class="span-bold">Region</span>: ${country.region}</p>
                                        <p><span class="span-bold">Sub Region</span>: ${country.subregion}</p>
                                        <p><span class="span-bold">Capital</span>: ${country.capital}</p>
                                    </div>
                                    <div>
                                        <p><span class="span-bold">Top Level Domain</span>: ${country.topLevelDomain[0]}</p>
                                        <p><span class="span-bold">Currencies</span>: ${country.currencies[0].code}, ${country.currencies[0].symbol}</p>
                                        <p><span class="span-bold">Languages</span>: ${country.languages[0].name}</p>
                                    </div>
                                </div>

                                <div class="border-countries">
                                    <p><span class="span-bold">Border Country</span>:</p>

                                    <div class="border">
                                        <button id="border-id" class="light-mode-elements dark-mode-elements">${country.borders[0]}</button>
                                    </div>
                                </div>
                            </div>
                        `
                    }

                    // pass the html template into the html detail divs
                    countryDetail.innerHTML = html;
                }
            });

            // remove the default border colors and set new colors on changing the themes
            const borderId = countryDetail.children[1].querySelectorAll('#border-id');
            // remove dark elements on the border
            this.removeDarkElements(borderId);

            // set the themes of the border buttons into the local storage
            this.elementThemeLocalStorage(borderId);

            // validate that the country contains the border div (not all the countries have borders so do not contain the border div)
            if (countryDetail.contains(countryDetail.children[1].children[2])) {
                // set an event listener on the border countries to go to the border countries page
                const countryDetails = countryDetail.children[1].children[2].children[1].children;

                // function to set border event listener
                this.setBorderEventListener(countryDetails);
            } else {
                return;
            }
        })
        .catch(error => console.log(error));
    }

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
                    // loop through the countries
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

    // remove the dark elements on the borders button created in the html template
    removeDarkElements(borderId) {
        // loop through the all the borders and perform the function on each border
        Array.from(borderId).forEach(border => {
            // remove dark elements from border
            border.classList.remove('dark-mode-elements');

            // changes the theme of border when darkMode is active
            darkMode.addEventListener('click', () => {
                border.classList.add('dark-mode-elements');
                border.classList.add('dark-mode-text');
            })

            // changes the theme of border when lightMode is active
            lightMode.addEventListener('click', () => {
                border.classList.remove('dark-mode-elements');
                border.classList.remove('dark-mode-text');
            })
        })
    }

    // load the saved elements on the cards
    elementThemeLocalStorage(elements) {
        // get the saved theme from the local storage
        const savedElementTheme = localStorage.getItem('elementTheme');

        // validate that the theme in the local storage is dark, to pass the border element theme
        if (savedElementTheme === 'dark-elements') {
            // remove dark elements from the cards to save to the local storage
            Array.from(elements).forEach(element => {
                element.classList.add('dark-mode-elements');
                element.classList.add('dark-mode-text');
            })
        }
    }

    // backbutton eventlistener to go back to the previous page
    returnHome() {
        history.back();
    }
}