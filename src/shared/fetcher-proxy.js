import { ApiFetcherFactory } from './apifetcher-factory';

const apiFactory = new ApiFetcherFactory();

const handler = {
    get: (target, propKey) => {
        return (arg) => {
            console.log('Inside proxy and intercepting actual method call ');
            const apiFetcher = target[propKey](arg);
            return apiFetcher.fetchData();
        }

    }
}

export const proxy = new Proxy(apiFactory, handler);
