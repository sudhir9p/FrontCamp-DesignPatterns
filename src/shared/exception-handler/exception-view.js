export class ExceptionView {

    constructor() { }

    getErrorPopup = () => document.getElementById("error-modal");
    getErrorModalContent = () => document.getElementById("error-content-popup");

    displayError(exception) {
        const errorModalContent = this.getErrorModalContent();
        errorModalContent.innerHTML = exception.message;

        const errorPopup = this.getErrorPopup();
        errorPopup.style.display = "block";
        
        setTimeout(() => {
            errorPopup.style.display = "none";
        }, 2000);
    }


}