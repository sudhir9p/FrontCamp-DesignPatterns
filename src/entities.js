//CREATTIONAL: Prototype / Class Design Pattern
export class NewsSource {
    constructor(id, name, category, country, description, language, url, rating) {
        this.id = id;
        this.sourceName = name;
        this.category = category;
        this.description = description;
        this.country = country;
        this.language = language;
        this.url = url;
        this.rating = rating;
    }
}

//CREATTIONAL: Constructor Design Pattern
export class TopHeadlines extends NewsSource {
    constructor(newsSource, author, title, description, url, urlToImage, content) {
        super(newsSource.category, newsSource.country, newsSource.description, newsSource.language, newsSource.url);

        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.content = content;
    }
}

//CREATTIONAL: Singleton Design Pattern
export class NewsSourceData {
    constructor(data) {
        if (!NewsSourceData.instance) {
            this.newsData = data;
            NewsSourceData.instance = this;
        }
        return NewsSourceData.instance;
    }
}

//CREATTIONAL: Factory Design Pattern
export class NewsSourceFactory {
    static createNewsSource(data) {
        if (data) {
            const name = data.name || "";
            const id = data.id || "";
            const category = data.category || "";
            const description = data.description || "";
            const country = data.country || "";
            const language = data.language || "";
            const url = data.url || "";
            const rating = data.rating || "None";

            return new NewsSource(id, name, category, country, description, language, url, rating);
        }
        else {
            return null;
        }
    }
}

//Structural Pattern: Mixin Patterns
let NewsSourceMixin = {
    addRating(rating) {
        this.rating = rating;
    }
}
Object.assign(NewsSource.prototype, NewsSourceMixin);
