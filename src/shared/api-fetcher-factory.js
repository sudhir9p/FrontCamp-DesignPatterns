import { ArticlesFetcher } from './articles-fetcher.js';
import { SourcesFetcher } from './sources-fetcher.js';

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