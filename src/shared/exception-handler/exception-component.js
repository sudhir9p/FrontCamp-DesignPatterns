export class ExceptionComponent {

    instance = null;
    getInstance = async () => {
        if (!this.instance) {
            const errorModule = await import('./exception-view');
            this.instance = new errorModule();
        }

        return this.instance;
    }
}