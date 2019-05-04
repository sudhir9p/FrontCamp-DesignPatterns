import { ArticlesFetcher } from './articlesfetcher.js';
import { SourcesFetcher } from './sourcesfetcher.js';

export class ApiFetcherFactory {
    constructor() { }

    request = (type) => {
        switch (type) {
            case "Sources":
                return new SourcesFetcher();
            case "Articles":
                return new ArticlesFetcher();
        }
    }

    fetchData = async (type) => {
        try {
            const requestUrl = this.request(type).fetch();
            const response = await fetch(requestUrl);
            return await response.json();
        } catch (ex) {
            console.error('Error fetching data');
        }
    }
}