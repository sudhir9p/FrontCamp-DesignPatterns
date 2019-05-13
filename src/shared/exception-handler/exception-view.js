export class ExceptionView {
    getErrorPopup = () => document.getElementById("error-popup");

    displayError(exception) {
        // alert(exception);
        const errorPopup = this.getErrorPopup();
        errorPopup.innerHTML = exception.Message;
        errorPopup.className = "show";
        setTimeout(() => {
            errorPopup.className = "hide";
        }, 2000);
    }


}