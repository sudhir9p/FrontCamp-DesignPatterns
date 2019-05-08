import { NewsSourcesView } from './view.js';
import { NewsSourcesModel } from './model.js';
import { proxy } from '../../shared/fetcher-proxy.js';
import { defaultSourceName } from '../../../configuration/config.json';

export default class NewsSourcesController {
    constructor(onSourceChangeCallback) {
        this.view = new NewsSourcesView(this);
        this.model = new NewsSourcesModel(this.view);
        this.onSourceChangeCallback = onSourceChangeCallback;
    }

    initialize = async () => {
        const sources = await proxy.request("Sources").fetchData();
        this.model.setSources(sources.sources);
    }

    onSourceChange = sourceId => {
        if (this.onSourceChangeCallback) {
            this.setSource(sourceId);
        }
    }

    setDefaultSource = () => {
        const source = this.model.sources.filter((item) => item.name === defaultSourceName);
        const currentSource = source && source.length > 0 ? source[0] : this.model.sources[0];
        debugger;
        this.model.updateSourceView(currentSource);
        this.onSourceChangeCallback(currentSource.id);
    }

    setSource(sourceId) {
        const source = this.model.sources.filter((item) => item.id === sourceId);
        const currentSource = source && source.length > 0 ? source[0] : this.model.sources[0];
        debugger;
        this.model.updateSourceView(currentSource);

        this.onSourceChangeCallback(sourceId);
    }


}