import { apiHost, sourcesUrl, apiKey } from '../../configuration/config.json';
import { ExceptionComponent } from './exception-handler/exception-component'

export class SourcesFetcher {
    fetchData = async () => {

        const url = `${apiHost}/${sourcesUrl}&apiKey=${apiKey}`;
        const response = await fetch(url);
        return await response.json();

    }
}