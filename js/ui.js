class UI {

    constructor() {
        this.init();
    }

    init() {
        this.countriesInfo();
    }

    // countries info
    countriesInfo() {

        // call the countries rest api
        countries.loadCountriesAPI()
        .then(countryData => {
            // construct html to contain the countries card info
            const countryCard = document.querySelector('#countries .container');

            countryData.forEach(country => {

                // create div
                const card = document.createElement('div');
                card.setAttribute('data-country', country.name);
                card.className = 'card-body dark-mode-elements light-mode-elements';
                
                let html = '';
                // html template for the cards
                html += `
                    <img src="${country.flags.png}" alt="${country.name}-flag">
    
                    <div class="card-info">
                        <h2 id="country-name" class="country-name">${country.name}</h2>
    
                        <div class="count-desc">
                            <p><span class="span-bold">Population</span>: ${country.population}</p>
                            <p><span class="span-bold">Region</span>: ${country.region}</p>
                            <p><span class="span-bold">Capital</span>: ${country.capital}</p>
                        </div>
                    </div>
                `

                // input the html template into the cards and append the cards into the container
                card.innerHTML = html;
                countryCard.appendChild(card);
            });

            const cardBody = countryCard.children;

            const elements = countryCard.querySelectorAll('.dark-mode elements, .light-mode-elements');


            // eventlistener for the cards
            this.cardListener();

            return [cardBody, elements];
        })        
        .then(([card, elements]) => {
            // remove the default card background and add the color themes
            this.removeCardBackground(card);

            // function to load the elements theme of the cards
            this.elementThemeLocalStorage(elements);  
        })
        .catch(error => console.log(error));
    }

    // function to remove and add color themes from the cards
    removeCardBackground(cards) {
        Array.from(cards).forEach(card => {
            // making the default card body have the light theme
            card.classList.remove('dark-mode-elements');
    
            // removing the light theme card body when dark mode button is clicked
            darkMode.addEventListener('click', () => {
                card.classList.add('dark-mode-elements');
                card.classList.remove('light-mode-elements');
            });
    
            // removing the dark theme card body when light mode button is clicked
            lightMode.addEventListener('click', () => {
                card.classList.remove('dark-mode-elements');
            });
        });
    }

    // load the saved elements on the cards
    elementThemeLocalStorage(elements) {
        // get the saved theme from the local storage
        const savedElementTheme = localStorage.getItem('elementTheme');

        if (savedElementTheme === 'dark-elements') {
            // remove dark elements from the cards to save to the local storage
            Array.from(elements).forEach(element => {
                element.classList.add('dark-mode-elements')
            })
        }
    }

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

        // remove placeholder color
        search.style.setProperty('--light-mode-text-color', '--dark-mode-text-color');

        // Save the theme preference to localStorage
        localStorage.setItem('theme', 'dark-mode');

        // Save the individual element theme preference to localStorage
        localStorage.setItem('elementTheme', 'dark-elements');
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

        // remove placeholder color
        search.style.setProperty('--dark-mode-text-color', '--light-mode-text-color');

        // removing the color on the dark mode button
        darkMode.style.display = 'block';
        darkMode.classList.remove('dark-mode-text');

        // Save the theme preference to localStorage
        localStorage.setItem('theme', 'light-mode');

        // Save the individual element theme preference to localStorage
        localStorage.setItem('elementTheme', 'light-elements');
    }

    // function to displays error on submitting an empty search
    error() {
        // set property of the search option to display an error occuring
        searchForm.style.border = '1px solid rgba(253, 114, 114, 0.863)';
        search.style.setProperty('--dark-mode-text-color', 'rgba(253, 114, 114, 0.863)');

        // remove error after 2secs
        setTimeout(() => {
            searchForm.style.border = 'none';
            search.style.setProperty('--dark-mode-text-color', '--light-mode-text-color');
        }, 2000)
    }

    // function to search for and validate the search
    searchCountries(searchValue) {
        // api call
        countries.loadCountriesAPI()
        .then(countryData => {

            const countryCard = document.querySelector('#countries .container');

            countryData.forEach(country => {

                // making the country api lowercase in case lowercase characters are typed into the search input
                const countryName = country.name.toLowerCase();
                const countryCode = country.alpha3Code.toLowerCase();
            
                // validate that the country(string) in the search input is the same as that of the country api, in aspects of lower case and first letter capital 
                if (searchValue === countryName || searchValue === country.name || searchValue === countryCode || searchValue === country.alpha3Code) {

                    // create div
                    const card = document.createElement('div');
                    card.setAttribute('data-country', country.name);
                    card.className = 'card-body dark-mode-elements light-mode-elements';
                    
                    let html = '';
                    // html template for the cards
                    html += `
                        <img src="${country.flags.png}" alt="${country.name}-flag">
        
                        <div class="card-info">
                            <h2 id="country-name" class="country-name">${country.name}</h2>
        
                            <div class="count-desc">
                                <p><span class="span-bold">Population</span>: ${country.population}</p>
                                <p><span class="span-bold">Region</span>: ${country.region}</p>
                                <p><span class="span-bold">Capital</span>: ${country.capital}</p>
                            </div>
                        </div>
                    `

                    // input the html template into the cards and append the cards into the container
                    card.innerHTML = html;
                    
                    // set the country cards to empty, to overwrite the previous cards and pass in the searched country
                    countryCard.innerHTML = '';
                    countryCard.appendChild(card);
                }

            })
            const cardBody = countryCard.children;

            // call the card event listener function on the cards generated from the search country
            this.cardListener();

            return cardBody;
        })
        .then(cards => {
            // remove card backgrounds based on color selected
            this.removeCardBackground(cards);
            
            // function to remove dark mode glitch
            this.removeDarkMode(cards);

        })
        .catch(error => console.log(error));
    }

    // function to remove dark mode error
    removeDarkMode(cards) {
        // checking if the body contains the dark mode to remove light mode from the cards
        const isDarkMode = document.body.classList.contains('dark-mode');
        if (isDarkMode) {
            Array.from(cards).forEach(card => {
                card.classList.remove('light-mode-elements');
                card.classList.add('dark-mode-elements');
            });
        }
    }

    // function to drop down the options and add hover styles
    dropDownOption() {
        options.style.display = 'block';

        // change the hover colors based on the theme in the body
        const isDarkMode = document.body.classList.contains('dark-mode');
        const isLightMode = document.body.classList.contains('light-mode');

        // change hover color of the lists
        Array.from(optionList).forEach(item => {
            // on mouse over 
            item.addEventListener('mouseover', () => {
                if (isLightMode) {
                    item.classList.add('light-mode');
                }
                if (isDarkMode) {
                    item.classList.add('dark-mode');
                }
            })
            // on mouse out
            item.addEventListener('mouseout', () => {
                if (isLightMode) {
                    item.classList.remove('light-mode');
                };
                if (isDarkMode) {
                    item.classList.remove('dark-mode');
                }
            })
        });

        // function call for the filtering the region of countries
        this.filterRegion();
    }

    // hide the options lists
    removeDropDown() {
        options.style.display = 'none';
    }

    // filter countries by regions
    filterRegion() {
        // loop through the array of options to grab their IDs and use the id to validate the api calls.
        Array.from(optionList).forEach(item => {

            item.addEventListener('click', (e) => {
                const region = e.target.id;
                
                countries.loadCountriesAPI()
                .then(countryData => {

                    // set the country card to empty from the start before appending child
                    const countryCard = document.querySelector('#countries .container');
                    countryCard.innerHTML = '';

                    countryData.map(country => {
                    
                        // validate if the region selected is the same with the region in the api
                        if (region === country.region) {

                            // create div
                            const card = document.createElement('div');
                            card.setAttribute('data-country', country.name);
                            card.className = 'card-body dark-mode-elements light-mode-elements';
                            
                            // html template for the cards
                            const html = `
                                <img src="${country.flags.png}" alt="${country.name}-flag">
                
                                <div class="card-info">
                                    <h2 id="country-name" class="country-name">${country.name}</h2>
                
                                    <div class="count-desc">
                                        <p><span class="span-bold">Population</span>: ${country.population}</p>
                                        <p><span class="span-bold">Region</span>: ${country.region}</p>
                                        <p><span class="span-bold">Capital</span>: ${country.capital}</p>
                                    </div>
                                </div>
                            `
                            // input the html template into the cards and append the cards into the container
                            card.innerHTML = html;

                            countryCard.appendChild(card);
                        }
                    })
                    const cardBody = countryCard.children;

                    // call the card event listener function on the cards generated from the filter region
                    this.cardListener();

                    return cardBody;
                })
                .then(cards => {
                    // remove card backgrounds based on color selected
                    this.removeCardBackground(cards);
                    
                    // function to remove dark mode glitch
                    this.removeDarkMode(cards);
                })
                .catch(error => console.log(error));
            })
        });
    }

    // event for loading card details info on clicking a target card
    cardListener() {
        // listen for a click on the container of the cards;
        const countryCard = document.querySelector('#countries .container');
        countryCard.addEventListener('click', handleCardClick);

        // handles the click on the container
        function handleCardClick(e) {
            /*
                check for the closest string that matches ".card-body" and returns the element that contains the string probably as a class..
                this way if you click any object or element even in the card body, it will only return the closest element that has the particular string.
            */
            const card = e.target.closest('.card-body');
            if (!card) return; // Click didn't happen on a card

            // grabs the country name set as the data attribute of the cards, so we can pass it into the url of the detail page
            const countryName = card.getAttribute('data-country');
            if (!countryName) return; // Card doesn't have the data-country attribute

            const currentTheme = localStorage.getItem('theme');

            // Navigate to the details page with the selected country name in the URL
            window.location.href = `detail.html?country=${encodeURIComponent(countryName)}&theme=${currentTheme}`;
        }
    }
}