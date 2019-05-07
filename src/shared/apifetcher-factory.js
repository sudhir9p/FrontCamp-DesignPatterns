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
}