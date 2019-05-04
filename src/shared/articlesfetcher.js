import { apiHost, articlesUrl ,apiKey} from '../../configuration/config.json'

export default class ArticlesFetcher {
    fetch = () => {
        const url = `${apiHost}/${articlesUrl}&apiKey=${apiKey}`
    }
}