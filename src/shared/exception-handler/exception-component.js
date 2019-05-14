export class ExceptionComponent {
    
    static instance = null;
    static getInstance = async () => {
        if (this.instance) {
            return this.instance;
        }

        const errorModule = await import('./exception-view');
        this.instance = new module();
        return this.instance;
    }
}