/**
 * baseManager.tsx
 */
import { BaseFEManager, DataService, StorageManager } from "../Core.FE/managers";
import { ApplicationVM, TerminalVM } from "../Core.FE/viewModels";

import { HttpProvider } from "./httpProvider";
import { StateProvider } from "./stateProvider";
import { StorageProvider } from "./storageProvider";
import { ViewHandler } from "./viewHandler";

import { Platform } from "react-native";
import { TerminalCodes } from "../Core.FE/enums";

export class BaseRNManager extends BaseFEManager {
    constructor() {
    // constructor(application: ApplicationVM, terminal: TerminalVM, server: ServerVM) {
        super(new HttpProvider(), new StorageProvider(), new ViewHandler());
        // , application,
        //  new TerminalVM(
        //     Platform.OS === "ios" ? TerminalCodes.IOS : TerminalCodes.ANDROID
        // ), server);

    }

    // // tslint:disable-next-line:no-http-string
    // export const BASE_SERVER_URL = "http://mplant.emeint.com";
    // export const SERVICE_ID = 31;
    // export const VERSION = "1.0.0";
    // export const BASE_API_URL = "api/mplant/mobile";
}
