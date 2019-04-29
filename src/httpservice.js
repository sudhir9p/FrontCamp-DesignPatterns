
import * as CommonUtilities from './common.js';
export class FetchNewsData {
    
    async fetchData(url) {
        return fetch(`https://newsapi.org/v2/${url}&apiKey=${CommonUtilities.constants.apiKey}`).catch(ex => {
            console.error(`error fetching data ${ex}`); 
        });  //Used ES6 Fetch
    }
}