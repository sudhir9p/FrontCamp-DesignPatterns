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
            data.forEach((item, index) => {
                var opt = document.createElement('option');
                opt.text = item.name;
                opt.value = item.value;
                sourcesDropdown.appendChild(opt);
            });
        }
    }

}