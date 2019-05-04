import { apiHost, sourcesUrl, apiKey } from '../../configuration/config.json'

export class SourcesFetcher {
    fetch = () => {
        const url = `${apiHost}/${sourcesUrl}&apiKey=${apiKey}`;
        return url;
    }
}