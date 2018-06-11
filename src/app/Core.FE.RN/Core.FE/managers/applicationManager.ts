/**
 * applicationManager.tsx
 */

import { ISingleton } from "../interfaces";
import { ApplicationVM, ServerVM, TerminalVM } from "../viewModels";

export class ApplicationManager implements ISingleton {
    private constructor() { }

    private application: ApplicationVM;
    private terminal: TerminalVM;
    private server: ServerVM;

    private static instance: ApplicationManager;

    public static get Instance() {
    return this.instance || (this.instance = new this());
}

    public init(application: ApplicationVM, terminal: TerminalVM, server: ServerVM) {
    this.application = application;
    this.terminal = terminal;
    this.server = server;
}

    public getApplicationInfo() {
    return this.application;
}

    public getServerInfo() {
    return this.server;
}

    public getTerminalInfo() {
    return this.terminal;
}

}
