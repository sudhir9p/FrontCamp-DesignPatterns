import * as CommonUtilities from './common.js';
import { FetchNewsData } from './httpservice.js';

export async function getTopHeadLines(apiKey) {
    const channelsDropdown = document.getElementById(CommonUtilities.constants.ddlchannelslist);
    const selectedIndex = document.getElementById(CommonUtilities.constants.ddlchannelslist).selectedIndex;
    if (selectedIndex >= 0) {
        const selectedItemId = channelsDropdown.options[selectedIndex].value;
        const fetchDataObj = new FetchNewsData(apiKey);
        let data = await (await fetchDataObj.fetchData(`${CommonUtilities.constants.topHeadlinesUrl}${selectedItemId}`)).json();   /*ES 2016*/
        data.articles.map((item, index) => {
            appendTopHeadlineNodes(`${selectedItemId}-${index}`, item);
        });
    }
}

export function appendTopHeadlineNodes(sourceID, item) {
    const topHeadlines = document.getElementById(CommonUtilities.constants.topHeadlines);
    const headlineItem = CommonUtilities.createNode(CommonUtilities.constants.divElement);
    headlineItem.className = "headlineItem";
    headlineItem.setAttribute(CommonUtilities.constants.Id, sourceID);
    const ItemDetails = `
    <div><strong>Author :</strong> <label id="author-${sourceID}">${item.author}</label></div>
    <div><strong>Title :</strong> <label id="title-${sourceID}">${item.title}</label></div>
    <div><strong>Description :</strong> <label id="description-${sourceID}">${item.description}</label></div>
    <div><strong>Url :</strong> <a id="url-${sourceID}" href="${item.url}">${item.url}</a></div>
    <div><strong>UrlToImage :</strong> <img id="urlToImage-${sourceID}" style="height:75px" src="${item.urlToImage}"></div>
    <div><strong>Content :</strong> <label id="content-${sourceID}">${item.content}</label></div>
    <hr />
    `;
    headlineItem.innerHTML = ItemDetails;
    topHeadlines.appendChild(headlineItem);
}