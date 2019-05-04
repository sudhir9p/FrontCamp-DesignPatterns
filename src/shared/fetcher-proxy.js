import { ApiFetcherFactory } from './apifetcher-factory';

const target = new ApiFetcherFactory();

const handler = {

}

export const proxy = new Proxy(target, handler);
