

export function createNode(element) {
    return document.createElement(element);
}

export function appendElement(parent, el) {
    return parent.appendChild(el);
}

export function setInnerHTML(el, value) {
    if (el != null && el != undefined)
        el.innerHTML = value;
}

export class constants {
    static ddlchannelslist = "ddlchannelslist";
    static selectedSourceName = "selectedSourceName";
    static selectedSourceCountry = "selectedSourceCountry";
    static selectedSourcedescription = "selectedSourcedescription";
    static selectedSourceLanguage = "selectedSourceLanguage";
    static selectedSourceUrl = "selectedSourceUrl";
    static newsFeedData = "newsFeedData";
    static getTopHeadLines = "getTopHeadLines";
    

    static topHeadlines = "topHeadlines";
    static divElement = "div";
    static option="option";
    static Id = "Id";
    static click = "click";
    static change = "change";

    static topHeadlinesUrl = "top-headlines?sources=";
    static apiKey = "c132a5c4ae714d27bdcc6b99f32c3c47";
    static sourceByLangUrl = "sources?language=en";
}