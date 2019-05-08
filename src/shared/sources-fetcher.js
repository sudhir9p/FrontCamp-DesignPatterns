import { apiHost, sourcesUrl, apiKey } from '../../configuration/config.json'

export class SourcesFetcher {
    fetchData = async () => {
        try {
            const url = `${apiHost}/${sourcesUrl}&apiKey=${apiKey}`;
            const response = await fetch(url);
            return await response.json();
        } catch (ex) {
            console.error('Error fetching data');
        }
    }
}