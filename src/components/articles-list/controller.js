import { proxy } from '../../shared/fetcher-proxy.js';
import { ArticlesListModel } from './model.js';
import { ArticlesListView } from './view.js';


export default class ArticlesListController {

    constructor() {
        this.view = new ArticlesListView(this);
        this.model = new ArticlesListModel(this.view);
    }

    fetchArticles = async (sourceId) => {
        const articles = await proxy.request("Articles").fetchData(sourceId);
        this.model.setArticles(articles.articles);
    }
}