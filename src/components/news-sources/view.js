export class NewsSourcesView {

    constructor(controller) {
        this.controller = controller;
        this.initializeDOM();
    }

    render = (sources) => {
        const sourcesDropdown = document.getElementById("soucres-dropdown");
        debugger;
        this.updateSourcesDropdownList(sources, sourcesDropdown);
    }

    initializeDOM = () => {
        const newsSourceContainer = document.getElementById("news-sources");
        this.createSourcesDropdown(newsSourceContainer);
    }

    onSourceChange = (event) => {

    }

    createSourcesDropdown(newsSourceContainer) {
        const sourcesDropdown = document.createElement('select');
        sourcesDropdown.setAttribute("id", "soucres-dropdown");
        this.updateSourcesDropdownList([{ name: "None", id: "0" }], sourcesDropdown);
        newsSourceContainer.appendChild(sourcesDropdown);
    }

    updateSourcesDropdownList(data, sourcesDropdown) {
        if (data && data.length > 0) {
            this.clearSourcesDropdownList(sourcesDropdown);
            data.forEach((item, index) => {
                const option = document.createElement('option');
                option.text = item.name;
                option.value = item.value;
                sourcesDropdown.appendChild(option);
            });
        }
    }

    clearSourcesDropdownList(sourcesDropdown) {
        debugger;
        if (sourcesDropdown && sourcesDropdown.options.length > 0) {
            for (let index = 0; index < sourcesDropdown.options.length; index++) {
                sourcesDropdown.remove(index);
            }
        }
    }

}