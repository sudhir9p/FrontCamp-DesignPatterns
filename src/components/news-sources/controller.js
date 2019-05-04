import { NewsSourcesView } from './view.js';
import { NewsSourcesModel } from './model.js';
import { proxy } from '../../shared/fetcher-proxy.js';

export default class NewsSourcesController {
    constructor(onSourceChangeCallback) {
        this.view = new NewsSourcesView(this);
        this.model = new NewsSourcesModel(this.view);
        this.onSourceChangeCallback = onSourceChangeCallback;
    }

    initialize = async () => {
        const sources = await proxy.fetchData("Sources");
        this.model.setSources(sources);
    }

    onSourceChange = (sourceId) => {
        if (this.onSourceChangeCallback) {
            this.onSourceChangeCallback(sourceId);
        }
    }

    setDefaultSource = () => {

    }
}