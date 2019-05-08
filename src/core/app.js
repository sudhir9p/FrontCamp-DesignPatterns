import NewsSources from '../components/news-sources/index.js';
import ArticlesList from '../components/articles-list/index.js';

export default class App {
    constructor() {
        this.newsSources = new NewsSources(this.handleNewsSourceChange);
        this.articlesList = new ArticlesList();
    }

    initialize = async () => {
        await this.newsSources.initialize();
        this.newsSources.setDefaultSource();
    }

    handleNewsSourceChange= async (sourceId)=>{
        await this.articlesList.fetchArticles(sourceId);
    }
}