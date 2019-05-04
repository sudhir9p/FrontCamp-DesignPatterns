export class NewsSourcesModel {
    constructor(view) {
        this.view = view;
    }

    setSources(sources) {
        this.sources = sources;
        this.updateView(sources);
    }

    updateView(sources) {
        this.view.render(sources.sources);
    }
}