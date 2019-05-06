import { ApiFetcherFactory } from './apifetcher-factory';

const target = new ApiFetcherFactory();

const handler = {
    // get: (target, args) => {
    //     debugger;
    // },
    // fetchData:(type)=>{
    //     debugger;
    // }
}

export const proxy = new Proxy(target, handler);
