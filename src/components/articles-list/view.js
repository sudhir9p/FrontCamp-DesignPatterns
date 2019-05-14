export class ArticlesListView {

    constructor(controller) {
    }

    renderArticles(articles) {
        if (articles && articles.length > 0) {
            const artilcesContainer = this.getArticlesContainer();
            artilcesContainer.innerHTML = "";
            articles.map((item, index) => {
                this.createArticles(index, item,artilcesContainer)
            });
        }
    }

    getArticlesContainer = () => document.getElementById("articles-list");


    createArticles(articleId, article,artilcesContainer) {
        const headlineItem = document.createElement("div");
        headlineItem.className = "headlineItem";
        headlineItem.setAttribute("id", articleId);
        const ItemDetails = `
                <div>
                    <strong>Author :</strong>
                    <label id="author-${articleId}">${article.author}</label>
                </div>
                <div>
                    <strong>Title :</strong>
                    <label id="title-${articleId}">${article.title}</label>
                </div>
                <div>
                    <strong>Description :</strong> 
                    <label id="description-${articleId}">${article.description}</label>
                </div>
                <div>
                    <strong>Url :</strong> 
                    <a id="url-${articleId}" href="${article.url}">${article.url}</a>
                </div>
                <div>
                    <strong>UrlToImage :</strong> 
                    <img id="urlToImage-${articleId}" style="height:75px" src="${article.urlToImage}">
                </div>
                <div>
                    <strong>Content :</strong> 
                    <label id="content-${articleId}">${article.content}</label>
                </div>
                <hr />
        `;
        headlineItem.innerHTML = ItemDetails;
        artilcesContainer.appendChild(headlineItem);
    }

}