

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

export var constants = {
    ddlChannelsList: "ddlchannelslist",
    selectedSourceName: "selectedSourceName",
    selectedSourceCountry: "selectedSourceCountry",
    selectedSourcedescription: "selectedSourcedescription",
    selectedSourceLanguage: "selectedSourceLanguage",
    selectedSourceUrl: "selectedSourceUrl",
    selectedSourceRating: "selectedSourceRating",
    newsFeedData: "newsFeedData",
    getTopHeadLines: "getTopHeadLines",
    updateSourceRating: "updateSourceRating",
    topHeadlines: "topHeadlines",
    divElement: "div",
    option: "option",
    Id: "Id",
    click: "click",
    change: "change",

    topHeadlinesUrl: "top-headlines?sources=",
    apiKey: "c132a5c4ae714d27bdcc6b99f32c3c47",
    sourceByLangUrl: "sources?language=en",
}

Object.freeze(constants);
