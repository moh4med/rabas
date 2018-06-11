/**
 * baseManager.tsx
 */
import { INetwork, IRouter, IState, IStorage, IView } from "../interfaces";
import { ApplicationVM, TerminalVM } from "../viewModels";
import { DataService } from "./dataService";
import { NetworkManager } from "./networkManager";
import { SessionManager } from "./sessionManager";
import { StateManager } from "./stateManager";
import { StorageManager } from "./storageManager";

export class BaseFEManager {
    protected DataService: DataService;
    protected StateManager: StateManager;
    protected StorageManager: StorageManager;
    protected apiName: string;
    // protected SessionManager: SessionManager;

    constructor(NetworkProvider: INetwork, StorageProvider: IStorage, ViewHandler: IView) {
        // application: ApplicationVM, terminal: TerminalVM, server: ServerVM)
        this.StateManager = new StateManager();
        // this.SessionManager = new SessionManager();
        this.StorageManager = new StorageManager(StorageProvider);
        this.DataService = new DataService(this.StorageManager, new NetworkManager(NetworkProvider), ViewHandler);
    }

}
