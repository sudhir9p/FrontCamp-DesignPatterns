import { apiHost, articlesUrl, apiKey } from '../../configuration/config.json';
import { ExceptionComponent } from './exception-handler/exception-component'

export class ArticlesFetcher {
    fetchData = async (sourceId) => {
        try {
            const url = `${apiHost}/${articlesUrl}${sourceId}&apiKey=${apiKey}`;
            const response = await fetch(url);
            return await response.json();
        } catch (exception) {
            const exceptionHandler = await ExceptionComponent.getInstance();
            exceptionHandler.displayError(exception);
        }
    }
}