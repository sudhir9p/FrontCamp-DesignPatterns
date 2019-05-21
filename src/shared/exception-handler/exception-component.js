export class ExceptionComponent {

    static instance = null;

    static getInstance = async () => {
        if (!ExceptionComponent.instance) {
            const errorModule = await import('./exception-view');
            this.exceptionView = new errorModule.ExceptionView();
            ExceptionComponent.instance = this;
        }

        return ExceptionComponent.instance;
    }
} 