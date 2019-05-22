export class ExceptionComponent {

    static instance = null;

    static getInstance = async () => {
        if (!ExceptionComponent.instance) {
            const errorModule = await import('./exception-view');
            ExceptionComponent.instance = new errorModule.ExceptionView();
        }

        return ExceptionComponent.instance;
    }
} 