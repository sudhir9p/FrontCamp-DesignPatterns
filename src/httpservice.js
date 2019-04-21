export class FetchNewsData {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async fetchData(url) {
        return fetch(`https://newsapi.org/v2/${url}&apiKey=${this.apiKey}`).catch(ex => {
            console.error(`error fetching data ${ex}`); 
        });  //Used ES6 Fetch
    }
}