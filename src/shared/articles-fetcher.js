import { apiHost, articlesUrl, apiKey } from '../../configuration/config.json'

export class ArticlesFetcher {
    fetchData = async (sourceId) => {
        try {
            const url = `${apiHost}/${articlesUrl}${sourceId}&apiKey=${apiKey}`;
            const response = await fetch(url);
            return await response.json();
        } catch (ex) {
            console.error('Error fetching data');
        }
    }
}