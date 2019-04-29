

import '../styles.css';
import * as CommonUtilities from './common.js';
import { NewsManager } from './news.js';
import * as topHeadLines from './topHeadLines.js';


/*Initiate the app */
const newsFeed = document.getElementById(CommonUtilities.constants.newsFeedData);
const getTopHeadLines = document.getElementById(CommonUtilities.constants.getTopHeadLines);
const updateSourceRating = document.getElementById(CommonUtilities.constants.updateSourceRating);
const ddlChannelsList = document.getElementById(CommonUtilities.constants.ddlChannelsList);

let newsManager = new NewsManager();
newsManager.displaySources();
let channelsOnchange = () => newsManager.updateNewsSummary();
let updateSourceRatingsClick = () => newsManager.updateSourceRating();
let getTopHeadLinesMethod = () => {
    topHeadLines.getTopHeadLines();
    //import('./topHeadLines').then(app => { app.getTopHeadLines(CommonUtilities.constants.apiKey); })
};




//() => TOPHeadLines.getTopHeadLines(CommonUtilities.constants.apiKey);
getTopHeadLines.addEventListener(CommonUtilities.constants.click, getTopHeadLinesMethod);
ddlChannelsList.addEventListener(CommonUtilities.constants.change, channelsOnchange);
updateSourceRating.addEventListener(CommonUtilities.constants.click, updateSourceRatingsClick);
