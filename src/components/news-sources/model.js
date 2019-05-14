export class NewsSourcesModel {
    constructor(view) {
        this.view = view;
        this.sources = [];
    }

    setSources(sources) {
        this.sources = sources;
        this.view.loadSourcesDropdown(this.sources);
    }


    updateSourceView(source) {
        this.view.onSourceChange(source);
    }
}