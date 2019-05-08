export class NewsSourcesView {

    constructor(controller) {
        this.controller = controller;
        this.initializeDOM();
    }

    loadSourcesDropdown = (sources) => {
        this.updateSourcesDropdownList(sources, this.getSourcesDropdown());
    }

    getNewsSourceContainer = () => document.getElementById("news-sources");
    getSourcesDropdown = () => document.getElementById("soucres-dropdown");

    initializeDOM = () => {
        this.createNewsSourcesTemplate();
        const sourcesDropdown = this.getSourcesDropdown();
        sourcesDropdown.addEventListener('change', (event) => this.controller.onSourceChange(event.target.value));
    }



    onSourceChange(source) {
        const sourceDropdown = this.getSourcesDropdown();
        sourceDropdown.value = source.id;
        this.setSourceSummary(source);
    }

    // createSourcesDropdown(newsSourceContainer) {
    //     const sourcesDropdown = document.createElement('select');
    //     sourcesDropdown.setAttribute("id", "soucres-dropdown");
    //     this.updateSourcesDropdownList([{ name: "None", id: "0" }], sourcesDropdown);
    //     newsSourceContainer.appendChild(sourcesDropdown);
    // }

    updateSourcesDropdownList(data, sourcesDropdown) {
        if (data && data.length > 0) {
            data.forEach((item, index) => {
                const option = document.createElement('option');
                option.text = item.name;
                option.value = item.id;
                sourcesDropdown.appendChild(option);
            });
        }
    }


    createNewsSourcesTemplate() {
        const newsContainer = this.getNewsSourceContainer();
        newsContainer.innerHTML = `

            <label class="sourceslabel" >Sources :</label><select id="soucres-dropdown"></select>
            <div class="sourcedetails">Source Details :</div>

            <div id= "newsSummary">
                <div class="margins"><strong  class="sideHeadings" >Category :</strong> <label id="selectedSourceName"></label></div>
                <div class="margins"><strong  class="sideHeadings" >Country :</strong> <label id="selectedSourceCountry"></label></div>
                <div class="margins"><strong  class="sideHeadings" >Description :</strong> <label id="selectedSourcedescription"></label></div>
                <div class="margins"><strong  class="sideHeadings" >Language :</strong> <label id="selectedSourceLanguage"></label></div>
                <div class="margins"><strong  class="sideHeadings" >Url :</strong> <a id="selectedSourceUrl"></a></div>
            </div>
            <div style="height:30px"></div>
        `
    }

    setSourceSummary(source) {
        const sourceSummaryValuesMap = new Map([
            ["selectedSourceName", source.category],
            ["selectedSourceCountry", source.country],
            ["selectedSourcedescription", source.description],
            ["selectedSourceLanguage", source.language],
            ["selectedSourceUrl", source.url]
        ]);

        this.assignValuesToElements(sourceSummaryValuesMap);
    }

    assignValuesToElements(elementsAndValuesMap) {
        elementsAndValuesMap.forEach((value, key) => {
            document.getElementById(key).innerText = value;
        });
    }

}