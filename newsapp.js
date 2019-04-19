import "es6-promise/auto";
import 'isomorphic-fetch';
import '@babel/polyfill';
import './styles.css';
import * as CommonUtilities from './common.js';
import { FetchNewsData } from './httpservice.js';

//To Load the page with News Data using News API with pure javascript
class DisplayNews {

    constructor(apiKey) {
        this.apiKey = apiKey;
        this.newsData = [];
    }

    async displaySources(apikey) {
        try {
            const channelsDropdown = document.getElementById(CommonUtilities.constants.ddlchannelslist);
            const fetchDataObj = new FetchNewsData(apikey)
            let apiData = await fetchDataObj.fetchData(CommonUtilities.constants.sourceByLangUrl);
            let data = await apiData.json();  /*ES 2016*/
            this.newsData = data.sources;
            data.sources.map((item) => { //Used map on arrays
                let option = CommonUtilities.createNode(CommonUtilities.constants.option);
                option.text = item.name;
                option.id = option.value = item.id;
                channelsDropdown.add(option);
            });
            this.sourcesOnChange();
        } catch (exception) {
            console.log(exception);
        }
    }

    sourcesOnChange() {
        try {
            const channelsDropdown = document.getElementById(CommonUtilities.constants.ddlchannelslist);
            const selectedIndex = document.getElementById(CommonUtilities.constants.ddlchannelslist).selectedIndex;
            if (selectedIndex >= 0) {
                const selectedItemId = channelsDropdown.options[selectedIndex].value;

                const selectedSourceName = document.getElementById(CommonUtilities.constants.selectedSourceName);
                const selectedSourceCountry = document.getElementById(CommonUtilities.constants.selectedSourceCountry);
                const selectedSourcedescription = document.getElementById(CommonUtilities.constants.selectedSourcedescription);
                const selectedSourceLanguage = document.getElementById(CommonUtilities.constants.selectedSourceLanguage);
                const selectedSourceUrl = document.getElementById(CommonUtilities.constants.selectedSourceUrl);
                const filteredItem = this.newsData.filter(item => selectedItemId == item.id)[0];

                const { name, country, description, language, url } = filteredItem; //Used ES6 object destructuring

                selectedSourceName.innerText = name;
                selectedSourceCountry.innerText = country;
                selectedSourcedescription.innerText = description;
                selectedSourceLanguage.innerText = language;
                selectedSourceUrl.innerText = selectedSourceUrl.href = url;

                const topHeadlinesEl = document.getElementById(CommonUtilities.constants.topHeadlines);
                CommonUtilities.setInnerHTML(topHeadlinesEl, "");

            }
        } catch (exception) {
            console.log(exception);
        }
    }
}


/*Initiate the app */
const newsFeed = document.getElementById(CommonUtilities.constants.newsFeedData);
const getTopHeadLines = document.getElementById(CommonUtilities.constants.getTopHeadLines);
const ddlchannelslist = document.getElementById(CommonUtilities.constants.ddlchannelslist);

let obj = new DisplayNews();
obj.displaySources(CommonUtilities.constants.apiKey);
let channelsOnchange = () => obj.sourcesOnChange();
let getTopHeadLinesMethod = () => {
    import('./topHeadLines').then(app => { app.getTopHeadLines(CommonUtilities.constants.apiKey); })
};


() => TOPHeadLines.getTopHeadLines(CommonUtilities.constants.apiKey);
getTopHeadLines.addEventListener(CommonUtilities.constants.click, getTopHeadLinesMethod);
ddlchannelslist.addEventListener(CommonUtilities.constants.change, channelsOnchange);
