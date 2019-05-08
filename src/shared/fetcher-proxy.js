import { ApiFetcherFactory } from './api-fetcher-factory';

const apiFactory = new ApiFetcherFactory();

const handler = {
    get: (target, propKey) => {
        debugger;
        return (arg) => {
            console.log('Inside proxy and intercepting actual method call ');
            return  target[propKey](arg);
        }

    }
}

export const proxy = new Proxy(apiFactory, handler);
