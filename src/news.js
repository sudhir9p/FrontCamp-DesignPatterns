import * as CommonUtilities from './common.js';
import { FetchNewsData } from './httpservice.js';
import { NewsSource, NewsSourceData, NewsSourceFactory, NewsSourceMixin } from './entities.js';

//To Load the page with News Data using News API with pure javascript
export class NewsManager {

    constructor() {
        this.newsSourceData = null;
        this.currentSource = null;
    }

    async displaySources() {
        try {
            const channelsDropdown = document.getElementById(CommonUtilities.constants.ddlChannelsList);
            const fetchDataObj = new FetchNewsData()
            let apiData = await fetchDataObj.fetchData(CommonUtilities.constants.sourceByLangUrl);
            let data = await apiData.json();  /*ES 2016*/
            this.newsSourceData = new NewsSourceData(data.sources);
            data.sources.map((item) => { //Used map on arrays
                let option = CommonUtilities.createNode(CommonUtilities.constants.option);
                option.text = item.name;
                option.id = option.value = item.id;
                channelsDropdown.add(option);
            });
            this.updateNewsSummary();
        } catch (exception) {
            console.log(exception);
        }
    }

    updateNewsSummary() {
        try {
            const channelsDropdown = document.getElementById(CommonUtilities.constants.ddlChannelsList);
            const selectedIndex = document.getElementById(CommonUtilities.constants.ddlChannelsList).selectedIndex;
            if (selectedIndex >= 0) {
                const selectedItemId = channelsDropdown.options[selectedIndex].value;

                const filteredItem = this.newsSourceData.newsData.filter(item => selectedItemId == item.id)[0];
                const newsSource = NewsSourceFactory.createNewsSource(filteredItem);
                this.currentSource = newsSource;
                
                const sourceSummaryValuesMap = new Map([
                    [CommonUtilities.constants.selectedSourceName, newsSource.category],
                    [CommonUtilities.constants.selectedSourceCountry, newsSource.country],
                    [CommonUtilities.constants.selectedSourcedescription, newsSource.description],
                    [CommonUtilities.constants.selectedSourceLanguage, newsSource.language],
                    [CommonUtilities.constants.selectedSourceUrl, newsSource.url],
                    [CommonUtilities.constants.selectedSourceRating, newsSource.rating]

                ])
                this.assignValuesToElements(sourceSummaryValuesMap);
                
                const topHeadlinesEl = document.getElementById(CommonUtilities.constants.topHeadlines);
                CommonUtilities.setInnerHTML(topHeadlinesEl, "");

            }
        } catch (exception) {
            console.log(exception);
        }
    }

    updateSourceRating() {
        let ratingEL = document.getElementById(CommonUtilities.constants.selectedSourceRating);
        const ratingValue = ratingEL.options[ratingEL.selectedIndex].value;
        this.currentSource.addRating(ratingValue);
        this.newsSourceData.newsData.forEach((item, index) => {
            if (item.id == this.currentSource.id)
                this.newsSourceData.newsData[index].rating = this.currentSource.rating;
        });
    }

    assignValuesToElements(elementsAndValuesMap) {
        elementsAndValuesMap.forEach((value, key, currentMap) => {
            if (key == CommonUtilities.constants.selectedSourceRating)
                document.getElementById(key).value = value;
            else
                document.getElementById(key).innerText = value;
        })
    }
}