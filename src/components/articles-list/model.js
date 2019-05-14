export class ArticlesListModel {

    constructor(view) {
        this.view = view;
        this.articles = [];
    }

    setArticles(articles) {
        this.view.renderArticles(articles);
    }
}