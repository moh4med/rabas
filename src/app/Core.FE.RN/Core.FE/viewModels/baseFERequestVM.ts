/**
 * requestVM.tsx
 */
// tslint:disable:max-classes-per-file

export class BaseFERequestVM {
    public apiController: string; // controller
    public actionMethod: string; // action
    public headers: {}; // headers

    constructor(apiController: string, actionMethod: string) {
        this.apiController = apiController;
        this.actionMethod = actionMethod;
        this.headers = {};
    }
}

export class BaseFEPostRequestVM extends BaseFERequestVM {
    constructor(apiController: string, actionMethod: string, body: {}) {
        super(apiController, actionMethod);
        this.body = body;
    }

    public body: any;
}

export class BaseFEGetRequestVM extends BaseFERequestVM {
    constructor(apiController: string, actionMethod: string, params?: {}) {
        super(apiController, actionMethod);
        this.params = params;
    }

    public params: any;
}
