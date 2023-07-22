class CountriesAPI {
    
    // loads the countries api from the data.json file
    async loadCountriesAPI() {
        const url = await fetch('data.json');

        const countries = url.json();

        return countries;
        
    }
}